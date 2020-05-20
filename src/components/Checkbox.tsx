import React, { HTMLProps } from 'react';

interface Props extends Readonly<HTMLProps<HTMLLabelElement>> {
  readonly id: string;
  readonly checkboxProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly inputProps?: Readonly<HTMLProps<HTMLInputElement>>;
}

export const Checkbox: React.FC<Props> = ({
  children,
  id,
  checkboxProps = {},
  inputProps = {},
  className,
  ...props
}) => {
  const { className: checkboxClassName = '', ...checboxRest } = checkboxProps;
  const { className: inputClassName = '', ...inputRest } = inputProps;

  return (
    <div {...checboxRest} className={`checkbox ${checkboxClassName}`}>
      <input
        {...inputRest}
        id={id}
        type="checkbox"
        className={`checkbox__box ${inputClassName}`}
      />

      <label {...props} htmlFor={id} className={`checkbox__label ${className}`}>
        {children}
      </label>
    </div>
  );
};
