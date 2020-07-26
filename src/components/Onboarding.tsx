import React, { HTMLProps } from 'react';
import classNames from 'classnames';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly iconProps: IconProps;
}

export const Onboarding: React.FC<Props> = ({
  children,
  className = '',
  containerProps = {},
  iconProps,
  ...props
}) => {
  const {
    className: containerClassName = '',
    ...containerRest
  } = containerProps;

  return (
    <div
      {...containerRest}
      className={classNames('onboarding-tip', containerClassName)}
    >
      <Icon {...iconProps} />

      <div {...props} className={classNames('onboarding-tip__msg', className)}>
        {children}
      </div>
    </div>
  );
};
