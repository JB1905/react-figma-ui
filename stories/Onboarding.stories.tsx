import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Onboarding } from '../src';

export default {
  title: 'Onboarding',
  decorators: [withKnobs],
};

export const normal = () => (
  <Onboarding iconProps={{ iconName: text('Icon Name', 'warning') as any }}>
    {text('Message', '')}
  </Onboarding>
);
