import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Switch } from '../src';

export default {
  title: 'Switch',
  decorators: [withKnobs],
};

export const normal = () => (
  <Switch checked={boolean('Checked', false)}>{text('Value', '')}</Switch>
);
