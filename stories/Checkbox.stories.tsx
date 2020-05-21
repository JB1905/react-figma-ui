import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Checkbox } from '../src';

export default {
  title: 'Checkbox',
  decorators: [withKnobs],
};

export const normal = () => (
  <Checkbox
    checked={boolean('Checked', false)}
    disabled={boolean('Disabled', false)}
    id="unique-id"
  >
    {text('Label', 'Checkbox Label')}
  </Checkbox>
);
