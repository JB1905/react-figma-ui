import React, { HTMLProps } from 'react';
import clsx from 'clsx';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {
  readonly selected?: boolean;
  readonly iconProps: IconProps;
}

export const IconButton = ({
  selected,
  className = '',
  iconProps,
  ...props
}: Props) => (
  <div
    {...props}
    className={clsx(
      'icon-button',
      className,
      selected && 'icon-button--selected'
    )}
  >
    <Icon {...iconProps} />
  </div>
);
