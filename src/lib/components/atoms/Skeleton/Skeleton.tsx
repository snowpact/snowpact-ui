import classNames from 'classnames';
import * as React from 'react';

export type SkeletonProps = { width?: string; height?: string; className?: string };

export const Skeleton: React.FC<SkeletonProps> = ({ className, height, width }) => {
  const appliedStyles: React.CSSProperties = {};
  if (height) {
    appliedStyles.height = height;
  }
  if (width) {
    appliedStyles.width = width;
  }
  return (
    <div
      className={classNames('animate-pulse bg-[#f6f7f8]', className)}
      // TODO put this as tailwind class
      style={{
        backgroundImage: 'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
        backgroundSize: '700px 100%',
        backgroundRepeat: 'no-repeat',
        ...appliedStyles
      }}
    />
  );
};
