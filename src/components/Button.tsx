import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

import type { Tint } from '../types';

interface Props
  extends Readonly<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  > {
  readonly tint?: Tint;
  readonly destructive?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  tint,
  destructive,
  className = '',
  ...props
}) => (
  <button
    {...props}
    className={`button ${
      tint ? `button--${tint}${destructive ? `-${destructive}` : ''}` : ''
    } ${className}`}
  >
    {children}
  </button>
);
