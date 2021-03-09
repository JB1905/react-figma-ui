import React from 'react';
import { Meta, Story } from '@storybook/react';

import { OnboardingTip } from '../src';

import type { IconName } from '../src/types';

interface Props {
  readonly iconName: IconName;
  readonly message: string;
}

export default {
  title: 'OnboardingTip',
  args: {
    iconName: 'warning',
    message: 'Onboarding tip goes here.',
  },
} as Meta;

export const Normal: Story<Props> = ({ iconName, message }) => (
  <OnboardingTip iconProps={{ iconName }}>{message}</OnboardingTip>
);
