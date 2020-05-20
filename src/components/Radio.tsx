import React, { HTMLProps } from 'react';

interface Props {
  value: string;
  radioProps: HTMLProps<HTMLInputElement>;
  buttonProps: HTMLProps<HTMLButtonElement>;
  labelProps: HTMLProps<HTMLLabelElement>;
}

export const Radio: React.FC<Props | any> = ({ value }) => (
  <div className="radio">
    <input
      id="radioButton1"
      type="radio"
      className="radio__button"
      value="Value"
      name="radioGroup"
    />

    <label htmlFor="radioButton1" className="radio__label">
      {value}
    </label>
  </div>
);
