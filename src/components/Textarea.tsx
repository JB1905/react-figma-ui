import React, { HTMLProps } from 'react';
import clsx from 'clsx';

interface Props extends Readonly<HTMLProps<HTMLTextAreaElement>> {}

export const Textarea = ({ className = '', ...props }: Props) => (
  <textarea {...props} className={clsx('textarea', className)} />
);
