import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { IconButton } from '../src';

export default {
  title: 'IconButton',
  decorators: [withKnobs],
};

export const normal = () => (
  <IconButton
    iconProps={{ iconName: text('Icon Name', 'theme') as any }}
    selected={boolean('Selected', false)}
  />
);
