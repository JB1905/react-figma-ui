import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

import { Icon, Props as IconProps } from '../Icon';

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
    className={sTrimmer(
      `icon-button ${className} ${selected ? 'icon-button--selected' : ''}`
    )}
  >
    <Icon {...iconProps} />
  </div>
);
