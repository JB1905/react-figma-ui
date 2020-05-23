import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Input } from '../src';

export default {
  title: 'Input',
  decorators: [withKnobs],
};

export const normal = () => (
  <Input
    value={text('Value', 'Value')}
    placeholder={text('Placeholder', 'Placeholder')}
    iconProps={{ iconName: text('Icon Name', 'search') as any }}
    disabled={boolean('Disabled', false)}
    readOnly
  />
);
