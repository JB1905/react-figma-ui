import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

interface Props
  extends Readonly<Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'ref'>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(
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
      <div {...containerRest} className={clsx('checkbox', containerClassName)}>
        <input
          {...props}
          id={id}
          type="checkbox"
          className={clsx('checkbox__box', className)}
          ref={ref}
        />

        <label
          {...labelRest}
          htmlFor={id}
          className={clsx('checkbox__label', labelClassName)}
        >
          {children}
        </label>
      </div>
    );
  }
);
