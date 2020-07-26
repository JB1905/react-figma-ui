import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

import type { IconName, ColorName } from '../../types';

export interface Props extends HTMLProps<HTMLDivElement> {
  readonly iconName?: Readonly<IconName>;
  readonly spin?: boolean;
  readonly colorName?: Readonly<ColorName>;
}

export const Icon: React.FC<Props> = ({
  children,
  iconName,
  className = '',
  spin,
  colorName,
  ...props
}) => (
  <div
    {...props}
    className={sTrimmer(
      `icon ${className} ${iconName ? `icon--${iconName}` : ''} ${
        spin ? 'icon--spin' : ''
      } ${colorName ? `icon--${colorName}` : ''}`
    )}
  >
    {children}
  </div>
);
