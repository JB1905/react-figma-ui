import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Checkbox } from '../src';

export default {
  title: 'Checkbox',
  decorators: [withKnobs],
};

export const normal = () => <Checkbox />;
