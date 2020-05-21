import React from 'react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';

import { Type } from '../src';

export default {
  title: 'Type',
  decorators: [withKnobs],
};

export const normal = () => (
  <Type
    size={
      radios(
        'Size',
        { Small: 'small', Large: 'large', Xlarge: 'xlarge' },
        'small'
      ) as any
    }
    weight={
      radios('Weight', { Medium: 'medium', Bold: 'bold' }, 'medium') as any
    }
    inverse={boolean('Inverse', false)}
  >
    {text('Text', 'Hello World!')}
  </Type>
);
