import type { PropsWithChildren } from 'react';
import React from 'react';

export type AvatarGroupdCounterProps = PropsWithChildren<{
  total?: number;
  href: string;
}>;

const AvatarGroupCounter: React.FC<AvatarGroupdCounterProps> = ({ total, href }) => {
  return (
    <a
      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600  "
      href={href}
    >
      +{total}
    </a>
  );
};

AvatarGroupCounter.displayName = 'Avatar.GroupCounter';
export default AvatarGroupCounter;
