import React, { HTMLProps } from 'react';
import clsx from 'clsx';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
}

type CustomComponentProps = {
  readonly sideComponent: React.ReactNode;
};

type WithIcon = {
  readonly iconProps: IconProps;
};

export const Onboarding = ({
  children,
  className = '',
  containerProps = {},
  ...props
}: Props & (CustomComponentProps | WithIcon)) => {
  const { className: containerClassName = '', ...containerRest } =
    containerProps;

  return (
    <div
      {...containerRest}
      className={clsx('onboarding-tip', containerClassName)}
    >
      {/* TODO refactor */}
      {'sideComponent' in props ? (
        props.sideComponent
      ) : (
        <Icon {...props.iconProps} />
      )}

      <div {...props} className={clsx('onboarding-tip__msg', className)}>
        {children}
      </div>
    </div>
  );
};
