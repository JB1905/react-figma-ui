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
    destructive={boolean('Destructive', false)}
    disabled={boolean('Disabled', false)}
  >
    {text('Label', 'Label')}
  </Button>
);
