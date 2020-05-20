import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Switch } from '../src';

export default {
  title: 'Switch',
  decorators: [withKnobs],
};

export const normal = () => <Switch></Switch>;
