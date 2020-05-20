import React, { HTMLProps } from 'react';

import { Icon, Props as IconProps } from './Icon';

interface Props {
  selected?: boolean;
  buttonProps?: HTMLProps<HTMLDivElement>;
  iconProps?: IconProps;
}

export const IconButton: React.FC<Props> = ({
  selected,
  buttonProps,
  iconProps,
}) => {
  const { className: buttonClassName = '', ...buttonRest } = buttonProps;
  const { icon } = iconProps;

  return (
    <div
      {...buttonRest}
      className={`icon-button ${
        selected ? 'icon-button--selected' : ''
      } ${buttonClassName}`}
    >
      {icon && <Icon {...iconProps} />}
    </div>
  );
};
