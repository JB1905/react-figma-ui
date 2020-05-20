import React, { HTMLProps } from 'react';

import { Icon, Props as IconProps } from './Icon';

interface Props {
  readonly inputProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly iconProps?: IconProps;
  readonly fieldProps?: Readonly<HTMLProps<HTMLInputElement>>;
}

export const Input: React.FC<Props> = ({
  inputProps = {},
  iconProps = {} as IconProps,
  fieldProps = {},
}) => {
  const { className: inputClassName = '', ...inputRest } = inputProps;
  const { iconName } = iconProps;
  const { className: fieldClassName = '', ...fieldRest } = fieldProps;

  return (
    <div
      {...inputRest}
      className={`input ${
        iconName ? 'input--with-icon' : ''
      } ${inputClassName}`}
    >
      {iconName && <Icon {...iconProps} />}

      <input
        {...fieldRest}
        type="input"
        className={`input__field ${fieldClassName}`}
      />
    </div>
  );
};
