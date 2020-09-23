import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const SectionTitle = ({ children, className = '', ...props }: Props) => (
  <div {...props} className={sTrimmer(`section-title ${className}`)}>
    {children}
  </div>
);
