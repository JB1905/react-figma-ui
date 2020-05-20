import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Type } from '../src';

export default {
  title: 'Type',
  decorators: [withKnobs],
};

export const normal = () => (
  <Type size={text()} weight={text()} inverse={boolean()}>
    {text('Text', 'Hello World!')}
  </Type>
);
