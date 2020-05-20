import React, { HTMLProps } from 'react';

import { Icon, Props as IconProps } from './Icon';

interface Props {
  readonly value: string;
  readonly onboardingTipProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly iconProps?: IconProps;
  readonly messageProps?: Readonly<HTMLProps<HTMLDivElement>>;
}

export const Onboarding: React.FC<Props> = ({
  value,
  onboardingTipProps = {},
  iconProps = {} as IconProps,
  messageProps = {},
}) => {
  const {
    className: onboardingTipClassName = '',
    ...onboardingTipRest
  } = onboardingTipProps;
  const { iconName } = iconProps;
  const { className: messageClassName = '', ...messageRest } = messageProps;

  return (
    <div
      {...onboardingTipRest}
      className={`onboarding-tip ${onboardingTipClassName}`}
    >
      {iconName && <Icon {...iconProps} />}

      <div
        {...messageRest}
        className={`onboarding-tip__msg ${messageClassName}`}
      >
        {value}
      </div>
    </div>
  );
};
