import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

import { Tint } from '../enums/Tint';

interface Props
  extends Readonly<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  > {
  readonly tint?: Tint;
}

export const Button: React.FC<Props> = ({
  children,
  tint,
  className = '',
  ...props
}) => (
  <button
    {...props}
    className={`button ${tint ? `button--${tint}` : ''} ${className}`}
  >
    {children}
  </button>
);
