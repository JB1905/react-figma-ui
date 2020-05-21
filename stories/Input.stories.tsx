import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Input } from '../src';

export default {
  title: 'Input',
  decorators: [withKnobs],
};

export const normal = () => (
  <Input
    value={text('Value', 'Input Value')}
    placeholder={text('Placeholder', 'Placeholder Text')}
    iconProps={{ iconName: text('Icon Name', 'search') as any }}
  />
);
