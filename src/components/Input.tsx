import React, { HTMLProps } from 'react';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly iconProps?: IconProps;
}

export const Input: React.FC<Props> = ({
  className,
  containerProps = {},
  iconProps = {} as IconProps,
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
      className={`input ${
        iconName ? 'input--with-icon' : ''
      } ${containerClassName}`}
    >
      {iconName && <Icon {...iconProps} />}

      <input {...props} type="input" className={`input__field ${className}`} />
    </div>
  );
};
