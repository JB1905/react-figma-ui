import React, { HTMLProps } from 'react';

import { Icon, Props as IconProps } from './Icon';

interface Props {
  inputProps?: HTMLProps<HTMLDivElement>;
  iconProps?: IconProps;
  fieldProps?: HTMLProps<HTMLInputElement>;
}

export const Input: React.FC<Props> = ({
  inputProps,
  iconProps,
  fieldProps,
}) => {
  const { className: inputClassName = '', ...inputRest } = inputProps;
  const { icon } = iconProps;
  const { className: fieldClassName = '', ...fieldRest } = fieldProps;

  return (
    <div
      {...inputRest}
      className={`input ${icon ? 'input--with-icon' : ''} ${inputClassName}`}
    >
      {icon && <Icon {...iconProps} />}

      <input
        {...fieldRest}
        type="input"
        className={`input__field ${fieldClassName}`}
      />
    </div>
  );
};
