import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { IconButton } from '../src';

export default {
  title: 'IconButton',
  decorators: [withKnobs],
};

export const normal = () => <IconButton></IconButton>;
