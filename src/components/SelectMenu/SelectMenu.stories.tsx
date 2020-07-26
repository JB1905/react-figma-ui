import React from 'react';

import { SelectMenu, SelectMenuOption } from '.';

export default {
  title: 'SelectMenu',
};

const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
];

export const normal = () => (
  <SelectMenu
    options={options}
    render={({ value, label }) => (
      <SelectMenuOption value={value} key={value}>
        {label}
      </SelectMenuOption>
    )}
  />
);
