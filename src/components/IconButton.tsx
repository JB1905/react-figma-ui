import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';

import { Icon, Props as IconProps } from './Icon';

interface Props
  extends Readonly<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  > {
  readonly selected?: boolean;
  readonly iconProps: IconProps;
}

export const IconButton = ({
  selected,
  className = '',
  iconProps,
  ...props
}: Props) => (
  <button
    {...props}
    className={clsx(
      'icon-button',
      className,
      selected && 'icon-button--selected'
    )}
  >
    <Icon {...iconProps} />
  </button>
);
