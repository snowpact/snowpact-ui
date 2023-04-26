import React from 'react';

type LinkOrDivProps = {
  href?: string;
  children: React.ReactNode;
  containerComponent?: React.ElementType;
  linkComponent?: React.ElementType;
  external?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const LinkOrDiv: React.FC<LinkOrDivProps> = ({
  href,
  children,
  external = false,
  containerComponent,
  linkComponent,
  className,
  onClick
}) => {
  const ContainerComponent = containerComponent || 'div';
  const LinkComponent = linkComponent || 'a';

  if (href) {
    return (
      <LinkComponent
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        href={href}
        className={className}
        onClick={onClick}
        data-testid="sui-link-or-div-result"
      >
        {children}
      </LinkComponent>
    );
  }
  return (
    <ContainerComponent className={className} data-testid="sui-link-or-div-result">
      {children}
    </ContainerComponent>
  );
};
