import React, { HTMLProps } from 'react';

interface Props {}

export const Radio: React.FC<Props | any> = ({ label }) => (
  <div className="radio">
    <input
      id="radioButton1"
      type="radio"
      className="radio__button"
      value="Value"
      name="radioGroup"
    />

    <label htmlFor="radioButton1" className="radio__label">
      Radio button
    </label>
  </div>
);
