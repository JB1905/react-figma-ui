import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Checkbox } from '.';

export default {
  title: 'Checkbox',
  decorators: [withKnobs],
};

export const normal = () => (
  <Checkbox
    id="uniqueId"
    checked={boolean('Checked', false)}
    disabled={boolean('Disabled', false)}
    readOnly
  >
    {text('Label', 'Label')}
  </Checkbox>
);
