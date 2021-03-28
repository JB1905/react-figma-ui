import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

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
    className={clsx(
      'button',
      className,
      tint && `button--${tint}${destructive ? '-destructive' : ''}`
    )}
  >
    {children}
  </button>
);
