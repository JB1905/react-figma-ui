import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

interface Props extends Readonly<Omit<HTMLProps<HTMLTextAreaElement>, 'ref'>> {}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className = '', ...props }, ref) => (
    <textarea {...props} className={clsx('textarea', className)} ref={ref} />
  )
);
