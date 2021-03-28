import React, { HTMLProps } from 'react';
import clsx from 'clsx';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const SectionTitle = ({ children, className = '', ...props }: Props) => (
  <div {...props} className={clsx('section-title', className)}>
    {children}
  </div>
);
