import React, { HTMLProps } from 'react';
import clsx from 'clsx';

import type { IconName, ColorName } from '../types';

export interface Props extends HTMLProps<HTMLDivElement> {
  readonly iconName?: Readonly<IconName>;
  readonly spin?: boolean;
  readonly colorName?: Readonly<ColorName>;
}

export const Icon = ({
  children,
  iconName,
  className = '',
  spin,
  colorName,
  ...props
}: Props) => (
  <div
    {...props}
    className={clsx(
      'icon',
      className,
      iconName && `icon--${iconName}`,
      spin && 'icon--spin',
      colorName && `icon--${colorName}`
    )}
  >
    {children}
  </div>
);
