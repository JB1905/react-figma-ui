import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

enum Tint {
  Primary = 'primary',
  PrimaryDestructive = 'primary-destructive',
  Secondary = 'secondary',
  SecondaryDestructive = 'secondary-destructive',
  Tertiary = 'tertiary',
  TertiaryDestructive = 'tertiary-destructive',
}

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  tint: Tint;
}

export const Button: React.FC<Props> = ({
  label,
  tint,
  className = '',
  ...props
}) => (
  <button
    {...props}
    className={`button ${tint ? `button--${tint}` : ''} ${className}`}
  >
    {label}
  </button>
);
