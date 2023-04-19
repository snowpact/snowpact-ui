import React from 'react';

type LinkComponentProps = {
  href?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  external?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const LinkComponent: React.FC<LinkComponentProps> = ({
  href,
  children,
  external = false,
  as,
  className,
  onClick
}) => {
  const ContainerComponent = as || 'div';
  if (href) {
    return (
      <a
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        href={href}
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return <ContainerComponent className={className}>{children}</ContainerComponent>;
};
