import React from 'react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';

import { Button } from '../src';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const normal = () => (
  <Button
    tint={
      radios(
        'Tint',
        {
          Primary: 'primary',
          Secondary: 'secondary',
          Tertirary: 'tertiary',
        },
        'primary'
      ) as any
    }
    disabled={boolean('Disabled', false)}
    destructive={boolean('Destructive', false)}
  >
    {text('Text', 'Button Text')}
  </Button>
);
