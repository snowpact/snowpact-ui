import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import type { HIStateColors } from '../../bosons/HelloInternet/HelloInternetTheme';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface LabelColors extends HIStateColors {
  [key: string]: string;
  default: string;
}

export interface LabelProps extends PropsWithChildren<Omit<ComponentProps<'label'>, 'className' | 'color'>> {
  color?: keyof LabelColors;
  value?: string;
  disabled?: boolean;
}

export const Label: FC<LabelProps> = ({
  children,
  color = 'default',
  disabled = false,
  value,
  ...props
}): JSX.Element => {
  const theme = useTheme().theme.formControls.label;
  const theirProps = excludeClassName(props);
  return (
    <label className={classNames(theme.base, theme.colors[color], disabled ?? theme.disabled)} {...theirProps}>
      {value ?? children ?? ''}
    </label>
  );
};
