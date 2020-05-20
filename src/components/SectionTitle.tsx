import React, { HTMLProps } from 'react';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const SectionTitle: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={`section-title ${className}`}>
    {children}
  </div>
);
