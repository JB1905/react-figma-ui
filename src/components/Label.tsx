import React, { HTMLProps } from 'react';
import clsx from 'clsx';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const Label = ({ children, className = '', ...props }: Props) => (
  <div {...props} className={clsx('label', className)}>
    {children}
  </div>
);
