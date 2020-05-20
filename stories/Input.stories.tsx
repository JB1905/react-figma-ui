import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Input } from '../src';

export default {
  title: 'Input',
  decorators: [withKnobs],
};

export const normal = () => <Input></Input>;
