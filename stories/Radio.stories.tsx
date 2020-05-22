import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Radio } from '../src';

export default {
  title: 'Radio',
  decorators: [withKnobs],
};

export const normal = () => (
  <Radio
    id="radioButton"
    checked={boolean('Checked', false)}
    disabled={boolean('Disabled', false)}
  >
    {text('Value', 'Radio button')}
  </Radio>
);
