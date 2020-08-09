import React, { HTMLProps } from 'react';
import clsx from 'clsx';

import type { Size, Weight } from '../types';

interface Props extends Readonly<Omit<HTMLProps<HTMLDivElement>, 'size'>> {
  readonly size?: Size;
  readonly weight?: Weight;
  readonly inverse?: boolean;
}

export const Type: React.FC<Props> = ({
  children,
  size,
  weight,
  inverse,
  className = '',
  ...props
}) => (
  <div
    {...props}
    className={clsx(
      'type',
      className,
      size && `type--${size}`,
      weight && 'type--weight',
      inverse && 'type--inverse'
    )}
  >
    {children}
  </div>
);
