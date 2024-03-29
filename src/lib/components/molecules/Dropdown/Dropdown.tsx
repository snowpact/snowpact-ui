import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import { useMemo } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronUp } from 'react-icons/hi';
import { excludeClassName } from '../../../helpers/exclude';
import type { ButtonProps } from '../../atoms/Button/Button';
import { Button } from '../../atoms/Button/Button';
import type { FloatingProps } from '../../bosons/Floating';
import { Floating } from '../../bosons/Floating';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface FlowbiteDropdownTheme {
  target: string;
  base: string;
  animation: string;
  hidden: string;
  style: {
    dark: string;
    light: string;
    auto: string;
  };
  header: string;
  content: string;
  arrow: {
    base: string;
    style: {
      dark: string;
      light: string;
      auto: string;
    };
    placement: string;
  };
  item: {
    base: string;
    icon: string;
  };
  divider: string;
}

export interface DropdownProps extends PropsWithChildren<Pick<FloatingProps, 'placement' | 'trigger'>>, ButtonProps {
  label: ReactNode;
  inline?: boolean;
  floatingArrow?: boolean;
  arrowIcon?: boolean;
}

const icons: Record<string, FC<ComponentProps<'svg'>>> = {
  top: HiOutlineChevronUp,
  right: HiOutlineChevronRight,
  bottom: HiOutlineChevronDown,
  left: HiOutlineChevronLeft
};

export const Dropdown: FC<DropdownProps> = ({ children, ...props }) => {
  const theme = useTheme().theme.dropdown;
  const theirProps = excludeClassName(props) as DropdownProps;
  const {
    placement = props.inline ? 'bottom-start' : 'bottom',
    trigger = 'click',
    label,
    inline,
    floatingArrow = false,
    arrowIcon = true,
    ...buttonProps
  } = theirProps;

  const Icon = useMemo(() => {
    const [p] = placement.split('-');
    return icons[p] ?? HiOutlineChevronDown;
  }, [placement]);

  const content = useMemo(() => <ul className={theme.content}>{children}</ul>, [children, theme]);

  const TriggerWrapper: FC<ButtonProps> = ({ children }): JSX.Element =>
    inline ? <button className={theme.inlineWrapper}>{children}</button> : <Button {...buttonProps}>{children}</Button>;

  return (
    <Floating
      content={content}
      style="auto"
      animation="duration-100"
      placement={placement}
      arrow={floatingArrow}
      trigger={trigger}
      theme={theme.floating}
    >
      <TriggerWrapper>
        {label}
        {arrowIcon && <Icon className={theme.arrowIcon} />}
      </TriggerWrapper>
    </Floating>
  );
};
