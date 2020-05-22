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
        id={id}
        type="checkbox"
        className={`switch__toggle ${className}`}
      />

      <label
        {...labelRest}
        htmlFor={id}
        className={`switch__label ${labelClassName}`}
      >
        {children}
      </label>
    </div>
  );
};
