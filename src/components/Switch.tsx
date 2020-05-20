import React, { HTMLProps } from 'react';

interface Props {
  value: string;
  switchProps: HTMLProps<HTMLDivElement>;
  toggleProps: HTMLProps<HTMLInputElement>;
  labelProps: HTMLProps<HTMLLabelElement>;
}

export const Switch: React.FC<Props> = ({ value }) => (
  <div className="switch">
    <input className="switch__toggle" type="checkbox" id="uniqueId" />

    <label className="switch__label" htmlFor="uniqueIdA">
      {value}
    </label>
  </div>
);
