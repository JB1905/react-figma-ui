import React from 'react';
import { Meta, Story } from '@storybook/react';

import { SelectMenu, SelectMenuOption } from '../src';

const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
];

interface Props {
  readonly options: typeof options;
}

export default {
  title: 'SelectMenu',
  args: { options } as Props,
  decorators: [
    (Story) => (
      <div style={{ minWidth: 200 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Normal: Story<Props> = ({ options }) => (
  <SelectMenu
    options={options}
    onChange={() => null} // TODO
    render={({ value, label }) => (
      <SelectMenuOption value={value} key={value}>
        {label}
      </SelectMenuOption>
    )}
  />
);
