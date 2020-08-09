import React, { HTMLProps } from 'react';
import clsx from 'clsx';

interface Props extends Readonly<HTMLProps<HTMLTextAreaElement>> {}

export const Textarea: React.FC<Props> = ({ className = '', ...props }) => (
  <textarea {...props} className={clsx('textarea', className)} />
);
