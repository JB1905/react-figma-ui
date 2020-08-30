import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Onboarding } from '../src';

import type { IconName } from '../src/types';

interface Props {
  readonly iconName: IconName;
  readonly message: string;
}

export default {
  title: 'Onboarding',
  component: Onboarding,
  args: {
    iconName: 'warning',
    message: 'Onboarding tip goes here.',
  },
} as Meta;

export const normal: Story<Props> = ({ iconName, message }) => (
  <Onboarding iconProps={{ iconName }}>{message}</Onboarding>
);
