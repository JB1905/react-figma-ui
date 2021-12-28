import React, { HTMLProps } from 'react';
import clsx from 'clsx';

interface Props
  extends Readonly<HTMLProps<Omit<HTMLInputElement, 'onChange'>>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = ({
  children,
  id,
  className = '',
  containerProps = {},
  labelProps = {},
  ...props
}: Props) => {
  const { className: containerClassName = '', ...containerRest } =
    containerProps;
  const { className: labelClassName = '', ...labelRest } = labelProps;

  return (
    <div {...containerRest} className={clsx('radio', containerClassName)}>
      <input
        {...props}
        id={id}
        type="radio"
        className={clsx('radio__button', className)}
      />

      <label
        {...labelRest}
        htmlFor={id}
        className={clsx('radio__label', labelClassName)}
      >
        {children}
      </label>
    </div>
  );
};
