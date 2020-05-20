import React, { HTMLProps } from 'react';

export interface Props extends HTMLProps<HTMLDivElement> {
  icon: string;
}

export const Icon: React.FC<Props> = ({ icon, className = '', ...props }) => (
  <div {...props} className={`icon icon--${icon} ${className}`} />
);
