import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

export const Label: React.FC<Readonly<HTMLProps<HTMLDivElement>>> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={sTrimmer(`label ${className}`)}>
    {children}
  </div>
);
