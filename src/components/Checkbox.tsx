import React, { HTMLProps } from 'react';

interface Props {
  checkboxProps: HTMLProps<HTMLDivElement>;
  inputProps: HTMLProps<HTMLInputElement>;
  labelProps: HTMLProps<HTMLLabelElement>;
}

export const Checkbox: React.FC<Props | any> = ({ label }) => (
  <div className="checkbox">
    <input id="uniqueId" type="checkbox" className="checkbox__box" />

    <label htmlFor="uniqueId" className="checkbox__label">
      {label}
    </label>
  </div>
);
