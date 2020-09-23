import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
}

export const Switch = ({
  children,
  id,
  className = '',
  containerProps = {},
  labelProps = {},
  ...props
}: Props) => {
  const {
    className: containerClassName = '',
    ...containerRest
  } = containerProps;
  const { className: labelClassName = '', ...labelRest } = labelProps;

  return (
    <div
      {...containerRest}
      className={sTrimmer(`switch ${containerClassName}`)}
    >
      <input
        {...props}
        id={id}
        type="checkbox"
        className={sTrimmer(`switch__toggle ${className}`)}
      />

      <label
        {...labelRest}
        htmlFor={id}
        className={sTrimmer(`switch__label ${labelClassName}`)}
      >
        {children}
      </label>
    </div>
  );
};
