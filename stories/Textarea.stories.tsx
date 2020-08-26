import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/addons';

import { Textarea } from '../src';

interface Props {
  readonly placeholder: string;
  readonly value: string;
  readonly rows: number;
  readonly disabled: boolean;
}

export default {
  title: 'Textarea',
  component: Textarea,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    rows: { control: 'number' },
    disabled: { control: 'boolean' },
  },
} as Meta;

export const normal: Story<Props> = ({ value, ...args }) => {
  const [_args, updateArgs] = useArgs();

  return (
    <Textarea
      {...args}
      value={value}
      onChange={(e) =>
        updateArgs({ value: (e.target as HTMLTextAreaElement).value })
      } // TODO
    />
  );
};

normal.args = {
  placeholder: 'Placeholder',
  value: 'Initial Value',
  rows: 2,
  disabled: false,
};
