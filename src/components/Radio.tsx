import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
}

export const Radio = ({
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
    <div {...containerRest} className={sTrimmer(`radio ${containerClassName}`)}>
      <input
        {...props}
        id={id}
        type="radio"
        className={sTrimmer(`radio__button ${className}`)}
      />

      <label
        {...labelRest}
        htmlFor={id}
        className={sTrimmer(`radio__label ${labelClassName}`)}
      >
        {children}
      </label>
    </div>
  );
};
