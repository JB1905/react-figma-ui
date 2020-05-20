import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  value: string;
}

export const Type: React.FC<Props> = ({ value, className = '', ...props }) => (
  <div {...props} className={`type ${className}`}>
    {value}
  </div>
);
