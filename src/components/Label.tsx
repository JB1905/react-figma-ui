import React, { HTMLProps } from 'react';
import clsx from 'clsx';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const Label: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={clsx('label', className)}>
    {children}
  </div>
);
