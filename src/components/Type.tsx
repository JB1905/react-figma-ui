import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

import type { Size, Weight } from '../types';

interface Props
  extends Omit<Readonly<HTMLProps<HTMLDivElement>>, 'ref' | 'size'> {
  readonly size?: Size;
  readonly weight?: Weight;
  readonly inverse?: boolean;
}

export const Type = forwardRef<HTMLDivElement, Props>(
  ({ children, size, weight, inverse, className = '', ...props }, ref) => (
    <div
      {...props}
      className={clsx(
        'type',
        className,
        size && `type--${size}`,
        weight && 'type--weight',
        inverse && 'type--inverse'
      )}
      ref={ref}
    >
      {children}
    </div>
  )
);
