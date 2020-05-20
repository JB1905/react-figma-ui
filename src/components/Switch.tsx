import React, { HTMLProps } from 'react';

interface Props {
  value: string;
  id: string;
  switchProps: HTMLProps<HTMLDivElement>;
  toggleProps: HTMLProps<HTMLInputElement>;
  labelProps: HTMLProps<HTMLLabelElement>;
}

export const Switch: React.FC<Props> = ({
  value,
  id,
  switchProps,
  toggleProps,
  labelProps,
}) => {
  const { className: switchClassName = '', ...switchRest } = switchProps;
  const { className: toggleClassName = '', ...toggleRest } = toggleProps;
  const { className: labelClassName = '', ...labelRest } = labelProps;

  return (
    <div {...switchRest} className={`switch ${switchClassName}`}>
      <input
        {...toggleRest}
        className={`switch__toggle ${toggleClassName}`}
        type="checkbox"
        id={id}
      />

      <label
        {...labelRest}
        className={`switch__label ${labelClassName}`}
        htmlFor={id}
      >
        {value}
      </label>
    </div>
  );
};
