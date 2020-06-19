import React, { HTMLProps } from 'react';

import { combineClassNames } from '../helpers/combineClassNames';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {
  readonly selected?: boolean;
  readonly iconProps: IconProps;
}

export const IconButton: React.FC<Props> = ({
  selected,
  className = '',
  iconProps,
  ...props
}) => (
  <div
    {...props}
    className={combineClassNames(
      `icon-button ${className} ${selected ? 'icon-button--selected' : ''}`
    )}
  >
    <Icon {...iconProps} />
  </div>
);
