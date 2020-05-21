import React, { HTMLProps } from 'react';

interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
}

export const Radio: React.FC<Props> = ({
  children,
  id,
  className = '',
  containerProps = {},
  labelProps = {},
  ...props
}) => {
  const { className: containerClassName, ...containerRest } = containerProps;
  const { className: labelClassName, ...labelRest } = labelProps;

  return (
    <div {...containerRest} className={`radio ${containerClassName}`}>
      <input
        {...props}
        id={id}
        type="radio"
        className={`radio__button ${className}`}
      />

      <label
        {...labelRest}
        htmlFor={id}
        className={`radio__label ${labelClassName}`}
      >
        {children}
      </label>
    </div>
  );
};
