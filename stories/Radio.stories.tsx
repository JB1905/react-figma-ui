import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Radio } from '../src';

export default {
  title: 'Radio',
  decorators: [withKnobs],
};

export const normal = () => (
  <Radio checked={boolean('Checked', false)}>{text('Value', 'Label')}</Radio>
);
