import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Textarea } from '../src';

export default {
  title: 'Textarea',
  decorators: [withKnobs],
};

export const normal = () => <Textarea value={text()} />;
