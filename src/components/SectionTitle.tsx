import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

export const SectionTitle: React.FC<Readonly<HTMLProps<HTMLDivElement>>> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={sTrimmer(`section-title ${className}`)}>
    {children}
  </div>
);
