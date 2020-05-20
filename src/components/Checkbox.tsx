import React, { HTMLProps } from 'react';

interface Props {
  value: string;
  id: string;
  checkboxProps: HTMLProps<HTMLDivElement>;
  inputProps: HTMLProps<HTMLInputElement>;
  labelProps: HTMLProps<HTMLLabelElement>;
}

export const Checkbox: React.FC<Props> = ({
  value,
  id,
  checkboxProps,
  inputProps,
  labelProps,
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
        {value}
      </label>
    </div>
  );
};
