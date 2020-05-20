import React, { HTMLProps } from 'react';

interface Props {
  readonly id: string;
  readonly checkboxProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly inputProps?: Readonly<HTMLProps<HTMLInputElement>>;
  readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
}

export const Checkbox: React.FC<Props> = ({
  children,
  id,
  checkboxProps = {},
  inputProps = {},
  labelProps = {},
}) => {
  const { className: checkboxClassName = '', ...checboxRest } = checkboxProps;
  const { className: inputClassName = '', ...inputRest } = inputProps;
  const { className: labelClassName = '', ...labelRest } = labelProps;

  return (
    <div {...checboxRest} className={`checkbox ${checkboxClassName}`}>
      <input
        {...inputRest}
        id={id}
        type="checkbox"
        className={`checkbox__box ${inputClassName}`}
      />

      <label
        {...labelRest}
        htmlFor={id}
        className={`checkbox__label ${labelClassName}`}
      >
        {children}
      </label>
    </div>
  );
};
