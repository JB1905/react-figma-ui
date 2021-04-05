import React, { HTMLProps } from 'react';
import clsx from 'clsx';

interface Props
  extends Readonly<HTMLProps<Omit<HTMLInputElement, 'onChange'>>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    <div {...containerRest} className={clsx('switch', containerClassName)}>
      <input
        {...props}
        id={id}
        type="checkbox"
        className={clsx('switch__toggle', className)}
      />

      <label
        {...labelRest}
        htmlFor={id}
        className={clsx('switch__label', labelClassName)}
      >
        {children}
      </label>
    </div>
  );
};
