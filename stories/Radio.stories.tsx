import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Radio } from '../src';

export default {
  title: 'Radio',
  decorators: [withKnobs],
};

export const normal = () => <Radio></Radio>;
