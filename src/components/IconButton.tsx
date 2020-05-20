import React, { HTMLProps } from 'react';

import { Icon, Props as IconProps } from './Icon';

interface Props {
  buttonProps: HTMLProps<HTMLDivElement>;
  iconProps: IconProps;
}

export const IconButton: React.FC<Props> = ({ buttonProps, iconProps }) => {
  const { className: buttonClassName = '', ...buttonRest } = buttonProps;
  const { icon } = iconProps;

  return (
    <div
      {...buttonRest}
      className={`icon-button icon-button--selected ${buttonClassName}`}
    >
      {icon && <Icon {...iconProps} />}
    </div>
  );
};
