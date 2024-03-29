import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { excludeClassName } from '../../../helpers/exclude';
import type { HIPositions, HISizes } from '../../bosons/HelloInternet/HelloInternetTheme';

import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { ModalContext } from './ModalContext';

export interface ModalPositions extends HIPositions {
  [key: string]: string;
}

export type ModalSizes = Pick<HISizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export interface ModalProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  onClose?: () => void;
  position?: keyof ModalPositions;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  size?: keyof ModalSizes;
}

export const Modal: FC<ModalProps> = ({
  children,
  show,
  root,
  popup,
  size = 'sm',
  position = 'center',
  onClose,
  ...props
}) => {
  const [parent, setParent] = useState<HTMLElement | undefined>(root);
  const [container, setContainer] = useState<HTMLDivElement | undefined>();
  const theme = useTheme().theme.modal;
  const theirProps = excludeClassName(props);

  useEffect(() => {
    if (!parent) setParent(document.body);
    if (!container) setContainer(document.createElement('div'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!container || !parent || !show) {
      return;
    }

    parent.appendChild(container);

    return () => {
      if (container) {
        parent.removeChild(container);
      }
    };
  }, [container, parent, show]);

  return container
    ? createPortal(
        <ModalContext.Provider value={{ popup, onClose }}>
          <div
            aria-hidden={!show}
            className={classNames(theme.base, theme.positions[position], show ? theme.show.on : theme.show.off)}
            data-testid="modal"
            role="dialog"
            {...theirProps}
          >
            <div className={classNames(theme.content.base, theme.sizes[size])}>
              <div className={theme.content.inner}>{children}</div>
            </div>
          </div>
        </ModalContext.Provider>,
        container
      )
    : null;
};
