import React, { HTMLProps, useMemo } from 'react';
import clsx from 'clsx';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
}

interface OnboardingSideComponentProps {
  readonly sideComponent: React.ReactNode;
}

interface OnboardingIconProps {
  readonly iconProps: IconProps;
}

export const Onboarding = ({
  children,
  className = '',
  containerProps = {},
  ...props
}: Props & (OnboardingSideComponentProps | OnboardingIconProps)) => {
  const { className: containerClassName = '', ...containerRest } =
    containerProps;

  const sideComponent = useMemo(() => {
    if ('sideComponent' in props) {
      return props.sideComponent;
    }

    return <Icon {...props.iconProps} />;
  }, [props]);

  return (
    <div
      {...containerRest}
      className={clsx('onboarding-tip', containerClassName)}
    >
      {sideComponent}

      <div {...props} className={clsx('onboarding-tip__msg', className)}>
        {children}
      </div>
    </div>
  );
};
