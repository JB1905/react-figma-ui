import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Label } from '.';

export default {
  title: 'Label',
  decorators: [withKnobs],
};

export const normal = () => <Label>{text('Label', 'Label')}</Label>;
