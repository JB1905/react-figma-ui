import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Icon } from '../src';

export default {
  title: 'Icon',
  decorators: [withKnobs],
};

export const normal = () => (
  <Icon iconName={text('Icon Name', 'blend') as any} />
);
