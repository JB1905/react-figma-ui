import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly iconProps?: IconProps;
}

export const Input: React.FC<Props> = ({
  className = '',
  type = 'input',
  containerProps = {},
  iconProps = {},
  ...props
}) => {
  const {
    className: containerClassName = '',
    ...containerRest
  } = containerProps;
  const { iconName } = iconProps;

  return (
    <div
      {...containerRest}
      className={sTrimmer(
        `input ${containerClassName} ${iconName ? 'input--with-icon' : ''}`
      )}
    >
      {iconName && <Icon {...iconProps} />}

      <input
        {...props}
        type={type}
        className={sTrimmer(`input__field ${className}`)}
      />
    </div>
  );
};
