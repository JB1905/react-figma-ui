import React, { HTMLProps } from 'react';
import clsx from 'clsx';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const SectionTitle: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={clsx('section-title', className)}>
    {children}
  </div>
);
