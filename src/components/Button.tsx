import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import sTrimmer from 's-trimmer';

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

export const Button = ({
  children,
  tint,
  destructive,
  className = '',
  ...props
}: Props) => (
  <button
    {...props}
    className={sTrimmer(
      `button ${className} ${
        tint ? `button--${tint}${destructive ? '-destructive' : ''}` : ''
      }`
    )}
  >
    {children}
  </button>
);
