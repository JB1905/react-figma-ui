import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  forwardRef,
} from 'react';
import clsx from 'clsx';

import type { Tint } from '../types';

interface Props
  // TODO
  extends Readonly<
    Omit<
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      'ref'
    >
  > {
  readonly tint?: Tint;
  readonly destructive?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, tint, destructive, className = '', ...props }, ref) => (
    <button
      {...props}
      className={clsx(
        'button',
        className,
        tint && `button--${tint}${destructive ? '-destructive' : ''}`
      )}
      ref={ref}
    >
      {children}
    </button>
  )
);
