import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/addons';

import { Checkbox } from '../src';

interface Props {
  readonly checked: boolean;
  readonly disabled: boolean;
  readonly label: string;
}

export default {
  title: 'Checkbox',
  args: {
    checked: false,
    disabled: false,
    label: 'Label',
  },
} as Meta;

export const Normal: Story<Props> = ({ checked, label, ...args }) => {
  const [_args, updateArgs] = useArgs();

  return (
    <Checkbox
      {...args}
      id="uniqueId"
      checked={checked}
      onChange={(e) => updateArgs({ checked: e.target.checked })} // TODO
    >
      {label}
    </Checkbox>
  );
};
