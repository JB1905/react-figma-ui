import React, { HTMLProps } from 'react';

import { Icon, Props as IconProps } from './Icon';

interface Props {
  readonly selected?: boolean;
  readonly buttonProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly iconProps?: IconProps;
}

export const IconButton: React.FC<Props> = ({
  selected,
  buttonProps = {},
  iconProps = {} as IconProps,
}) => {
  const { className: buttonClassName = '', ...buttonRest } = buttonProps;
  const { iconName } = iconProps;

  return (
    <div
      {...buttonRest}
      className={`icon-button ${
        selected ? 'icon-button--selected' : ''
      } ${buttonClassName}`}
    >
      {iconName && <Icon {...iconProps} />}
    </div>
  );
};
