import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Icon } from '../src';

export default {
  title: 'Icon',
  decorators: [withKnobs],
};

export const normal = () => (
  <Icon
    iconName={text('Icon Name', 'blend') as any}
    colorName={text('Icon Color', 'blue') as any}
    spin={boolean('Spin', false)}
  >
    {text('Value', '')}
  </Icon>
);
