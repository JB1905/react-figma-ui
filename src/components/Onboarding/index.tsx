import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

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
      className={sTrimmer(`onboarding-tip ${containerClassName}`)}
    >
      <Icon {...iconProps} />

      <div {...props} className={sTrimmer(`onboarding-tip__msg ${className}`)}>
        {children}
      </div>
    </div>
  );
};
