import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  value: string;
}

export const SectionTitle: React.FC<Props> = ({
  value,
  className = '',
  ...props
}) => (
  <div {...props} className={`section-title ${className}`}>
    {value}
  </div>
);
