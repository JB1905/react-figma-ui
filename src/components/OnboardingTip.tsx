import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Omit<Readonly<HTMLProps<HTMLDivElement>>, 'ref'> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly iconProps: IconProps;
}

export const OnboardingTip = forwardRef<HTMLDivElement, Props>(
  (
    { children, className = '', containerProps = {}, iconProps, ...props },
    ref
  ) => {
    const { className: containerClassName = '', ...containerRest } =
      containerProps;

    return (
      <div
        {...containerRest}
        className={clsx('onboarding-tip', containerClassName)}
      >
        <Icon {...iconProps} />

        <div
          {...props}
          className={clsx('onboarding-tip__msg', className)}
          ref={ref}
        >
          {children}
        </div>
      </div>
    );
  }
);
