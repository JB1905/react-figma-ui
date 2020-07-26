import React from 'react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Textarea } from '../src';

export default {
  title: 'Textarea',
  decorators: [withKnobs],
};

export const normal = () => (
  <Textarea
    placeholder={text('Placeholder', 'Placeholder')}
    value={text('Value', 'Initial value')}
    rows={number('Rows', 2)}
    disabled={boolean('Disabled', false)}
    readOnly
  />
);
