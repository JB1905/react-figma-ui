import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const Label = ({ children, className = '', ...props }: Props) => (
  <div {...props} className={sTrimmer(`label ${className}`)}>
    {children}
  </div>
);
