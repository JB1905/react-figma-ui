import React, { HTMLProps } from 'react';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const Label: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={`label ${className}`}>
    {children}
  </div>
);
