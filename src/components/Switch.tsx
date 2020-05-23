import React, { HTMLProps } from 'react';

import { trimClassNames } from '../helpers/combineClassNames';

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
    <div
      {...containerRest}
      className={trimClassNames(`switch ${containerClassName}`)}
    >
      <input
        {...props}
        id={id}
        type="checkbox"
        className={trimClassNames(`switch__toggle ${className}`)}
      />

      <label
        {...labelRest}
        htmlFor={id}
        className={trimClassNames(`switch__label ${labelClassName}`)}
      >
        {children}
      </label>
    </div>
  );
};
