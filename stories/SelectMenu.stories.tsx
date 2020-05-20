import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { SelectMenu } from '../src';

export default {
  title: 'SelectMenu',
  decorators: [withKnobs],
};

export const normal = () => <SelectMenu items={}></SelectMenu>;
