import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { SelectMenu, SelectMenuOption } from '../src';

export default {
  title: 'SelectMenu',
  decorators: [withKnobs],
};

export const normal = () => (
  <SelectMenu
    options={[1, 2, 3]}
    render={(item) => <SelectMenuOption>Lorem ipsum dolor</SelectMenuOption>}
  />
);
