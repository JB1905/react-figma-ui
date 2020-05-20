import React from 'react';

import { Icon } from './Icon';

interface Props {
  value: string;
}

export const Onboarding: React.FC<Props> = ({ value }) => (
  <div className="onboarding-tip">
    <Icon />

    <div className="onboarding-tip__msg">{value}</div>
  </div>
);
