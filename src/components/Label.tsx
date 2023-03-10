import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

interface Props extends Omit<Readonly<HTMLProps<HTMLDivElement>>, 'ref'> {}

export const Label = forwardRef<HTMLDivElement, Props>(
  ({ children, className = '', ...props }, ref) => (
    <div {...props} className={clsx('label', className)} ref={ref}>
      {children}
    </div>
  )
);
