import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
}

export const Checkbox: React.FC<Props> = ({
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
      className={classNames('checkbox', containerClassName)}
    >
      <input
        {...props}
        id={id}
        type="checkbox"
        className={classNames('checkbox__box', className)}
      />

      <label
        {...labelRest}
        htmlFor={id}
        className={classNames('checkbox__label', labelClassName)}
      >
        {children}
      </label>
    </div>
  );
};
