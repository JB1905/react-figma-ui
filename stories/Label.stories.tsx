import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Label } from '../src';

export default {
  title: 'Label',
  decorators: [withKnobs],
};

export const normal = () => <Label></Label>;
