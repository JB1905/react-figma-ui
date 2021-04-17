import React from 'react';
import { Meta, Story } from '@storybook/react';

import { SelectMenu, SelectMenuOption } from '../src';

export default {
  title: 'SelectMenu',
  parameters: {
    controls: {
      disable: true,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: 200 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

// TODO
const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
];

export const Normal: Story = () => (
  <SelectMenu
    options={options}
    render={({ value, label }) => (
      <SelectMenuOption value={value} key={value}>
        {label}
      </SelectMenuOption>
    )}
  />
);
