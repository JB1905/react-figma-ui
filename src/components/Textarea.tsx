import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

export const Textarea: React.FC<Readonly<HTMLProps<HTMLTextAreaElement>>> = ({
  className = '',
  ...props
}) => <textarea {...props} className={sTrimmer(`textarea ${className}`)} />;
