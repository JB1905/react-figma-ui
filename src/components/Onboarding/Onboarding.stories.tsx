import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Onboarding } from '.';

import { IconName } from '../../types';

export default {
  title: 'Onboarding',
  decorators: [withKnobs],
};

export const normal = () => (
  <Onboarding
    iconProps={{ iconName: text('Icon Name', 'warning') as IconName }}
  >
    {text('Message', 'Onboarding tip goes here.')}
  </Onboarding>
);
