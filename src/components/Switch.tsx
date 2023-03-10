import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

interface Props
  extends Omit<Readonly<HTMLProps<HTMLInputElement>>, 'ref' | 'onChange'> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch = forwardRef<HTMLInputElement, Props>(
  (
    {
      children,
      id,
      className = '',
      containerProps = {},
      labelProps = {},
      ...props
    },
    ref
  ) => {
    const { className: containerClassName = '', ...containerRest } =
      containerProps;
    const { className: labelClassName = '', ...labelRest } = labelProps;

    return (
      <div {...containerRest} className={clsx('switch', containerClassName)}>
        <input
          {...props}
          id={id}
          type="checkbox"
          className={clsx('switch__toggle', className)}
          ref={ref}
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
  }
);
