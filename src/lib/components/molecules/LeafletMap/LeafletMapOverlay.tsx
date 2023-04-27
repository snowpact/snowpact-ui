import classNames from 'classnames';
import type { FC } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface LeafletMapOverlayProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

export const LeafletMapOverlay: FC<LeafletMapOverlayProps> = ({
  position,
  width = '200px',
  height = '200px',
  children
}): JSX.Element => {
  const theme = useTheme().theme.leafletMap;

  return (
    <div
      className={classNames('absolute', theme.overlay, [
        position === 'top-left' && 'top-[20px] left-[20px]',
        position === 'top-right' && 'top-[20px] right-[20px]',
        position === 'bottom-left' && 'bottom-[20px] left-[20px]',
        position === 'bottom-right' && 'bottom-[20px] right-[20px]'
      ])}
      style={{
        width: width,
        height: height
      }}
    >
      {children}
    </div>
  );
};
