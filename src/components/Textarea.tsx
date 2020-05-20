import React, { HTMLProps } from 'react';

interface Props extends Readonly<HTMLProps<HTMLTextAreaElement>> {}

export const Textarea: React.FC<Props> = ({ className = '', ...props }) => (
  <textarea {...props} className={`textarea ${className}`} />
);
