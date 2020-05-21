import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { SelectMenu, SelectMenuOption } from '../src';

export default {
  title: 'SelectMenu',
  decorators: [withKnobs],
};

// export const normal = () => (
//   <SelectMenu
//     // items={null}
//     render={(item) => <SelectMenuOption>aaaa</SelectMenuOption>}
//   />
// );
