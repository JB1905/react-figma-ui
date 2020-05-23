import React, { HTMLProps } from 'react';

import { trimClassNames } from '../helpers/combineClassNames';

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
  const {
    className: containerClassName = '',
    ...containerRest
  } = containerProps;
  const { className: labelClassName = '', ...labelRest } = labelProps;

  return (
    <div
      {...containerRest}
      className={trimClassNames(`radio ${containerClassName}`)}
    >
      <input
        {...props}
        id={id}
        type="radio"
        className={trimClassNames(`radio__button ${className}`)}
      />

      <label
        {...labelRest}
        htmlFor={id}
        className={trimClassNames(`radio__label ${labelClassName}`)}
      >
        {children}
      </label>
    </div>
  );
};
