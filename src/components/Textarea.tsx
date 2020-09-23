import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

interface Props extends Readonly<HTMLProps<HTMLTextAreaElement>> {}

export const Textarea = ({ className = '', ...props }: Props) => (
  <textarea {...props} className={sTrimmer(`textarea ${className}`)} />
);
