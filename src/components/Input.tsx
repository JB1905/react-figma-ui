import React, { HTMLProps } from 'react';
import clsx from 'clsx';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly iconProps?: IconProps;
}

export const Input: React.FC<Props> = ({
  className = '',
  type = 'input',
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
      className={clsx(
        'input',
        containerClassName,
        iconName && 'input--with-icon'
      )}
    >
      {iconName && <Icon {...iconProps} />}

      <input
        {...props}
        type={type}
        className={clsx('input__field', className)}
      />
    </div>
  );
};
