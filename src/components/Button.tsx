import React, { HTMLProps } from 'react';

enum Tint {
  Primary = 'primary',
  PrimaryDestructive = 'primary-destructive',
  Secondary = 'secondary',
  SecondaryDestructive = 'secondary-destructive',
  Tertiary = 'tertiary',
  TertiaryDestructive = 'tertiary-destructive',
}

interface Props extends HTMLProps<HTMLButtonElement> {
  tint: Tint;
}

export const Button: React.FC<Props | any> = ({
  label,
  tint,
  className,
  ...props
}) => (
  <button
    {...props}
    className={`button ${tint ? `button--${tint}` : ''} ${
      className ? className : ''
    }`}
  >
    {label}
  </button>
);
