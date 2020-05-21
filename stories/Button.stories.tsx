import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Button } from '../src';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const normal = () => (
  <Button
    tint={text('Tint', 'primary') as any}
    disabled={boolean('Disabled', false)}
    destructive={boolean('Destructive', false)}
  >
    Hello
  </Button>
);
