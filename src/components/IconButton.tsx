import React, { HTMLProps } from 'react';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {
  readonly selected?: boolean;
  readonly iconProps?: IconProps;
}

export const IconButton: React.FC<Props> = ({
  selected,
  className = '',
  iconProps = {} as IconProps,
  ...props
}) => {
  const { iconName } = iconProps;

  return (
    <div
      {...props}
      className={`icon-button ${className} ${
        selected ? 'icon-button--selected' : ''
      }`}
    >
      {iconName && <Icon {...iconProps} />}
    </div>
  );
};
