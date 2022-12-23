import { yupResolver } from '@hookform/resolvers/yup';
import React, { createElement } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { extractErrorLabel } from './utils';



export type FormProps = {
  className?: string;
  children?: React.ReactElement | React.ReactElement[];
  render?: (props: UseFormReturn<any, any>) => React.ReactElement;
  schema?: yup.AnyObjectSchema;
  defaultValues?: any;
  onSubmit: any;
  onlyTouchedFields?: boolean;
};

const ATTRIBUTES = {
  NESTED: 'data-form-nested-field',
  CUSTOM: 'data-form-custom-field'
};

export const Form = ({ className, children, render, onSubmit, defaultValues, schema, onlyTouchedFields, ...rest }: FormProps) => {
  const { t } = useTranslation();
  const useFormProps = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: schema ? yupResolver(schema) : undefined,
    shouldFocusError: false
  });

  const { register, handleSubmit, control, formState } = useFormProps;

  let renderedChildren = children ?? [];

  const { touchedFields } = formState;

  const preOnSubmit = (data: any) => {
    if (onlyTouchedFields) {
      const touchedKeys = Object.keys(touchedFields);

      if (touchedKeys.length > 0) {
        const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => touchedKeys.includes(key)));

        onSubmit(filteredData);
        return;
      }
      onSubmit({});
      return;
    }
    onSubmit(data);
  };

  const processFields = (child: JSX.Element): JSX.Element => {
    if (child?.props?.children && child?.props?.[ATTRIBUTES.NESTED] === 'true') {
      return <child.type {...child.props}>{React.Children.map(child.props.children, processFields)}</child.type>;
    } else if (child?.props?.name) {
      const errorLabel = extractErrorLabel(formState.errors, child.props.name, child.props.useCustomError);

      if (child?.props?.[ATTRIBUTES.CUSTOM] === 'true') {
        return createElement(child.type, {
          ...{
            ...child.props,
            control,
            defaultValue: defaultValues?.[child.props.name],
            error: t(errorLabel),
            key: child.props.name
          }
        });
      }

      return createElement(child.type, {
        ...{
          ...child.props,
          error: t(errorLabel),
          register: register,
          key: child.props.name
        }
      });
    }

    return child;
  };

  if (render) {
    renderedChildren = render(useFormProps);
  }

  return (
    <form className={className} onSubmit={handleSubmit(preOnSubmit)} {...rest}>
      {React.Children.map(renderedChildren, (child) => {
        if (child?.props?.children && child?.props?.[ATTRIBUTES.NESTED] === 'true') {
          return <child.type {...child.props}>{React.Children.map(child.props.children, processFields)}</child.type>;
        }

        return processFields(child);
      })}
    </form>
  );
};

export default Form;
