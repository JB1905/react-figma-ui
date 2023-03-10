import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

import type { IconName, ColorName } from '../types';

export interface Props
  extends Readonly<Omit<HTMLProps<HTMLDivElement>, 'ref'>> {
  readonly iconName?: Readonly<IconName>;
  readonly spin?: boolean;
  readonly colorName?: Readonly<ColorName>;
}

export const Icon = forwardRef<HTMLDivElement, Props>(
  ({ children, iconName, className = '', spin, colorName, ...props }, ref) => (
    <div
      {...props}
      className={clsx(
        'icon',
        className,
        iconName && `icon--${iconName}`,
        spin && 'icon--spin',
        colorName && `icon--${colorName}`
      )}
      ref={ref}
    >
      {children}
    </div>
  )
);
