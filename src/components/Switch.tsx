import React, { HTMLProps } from 'react';

interface Props {
  readonly id: string;
  readonly switchProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly toggleProps?: Readonly<HTMLProps<HTMLInputElement>>;
  readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
}

export const Switch: React.FC<Props> = ({
  children,
  id,
  switchProps = {},
  toggleProps = {},
  labelProps = {},
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
        {children}
      </label>
    </div>
  );
};
