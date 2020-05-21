import React, { HTMLProps } from 'react';

interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
}

export const Switch: React.FC<Props> = ({
  children,
  id,
  className = '',
  containerProps = {},
  labelProps = {},
  ...props
}) => {
  const {
    className: containerClassName = '',
    ...containerRest
  } = containerProps;
  const { className: labelClassName = '', ...labelRest } = labelProps;

  return (
    <div {...containerRest} className={`switch ${containerClassName}`}>
      <input
        {...props}
        className={`switch__toggle ${className}`}
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
