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
  args: {
    placeholder: 'Placeholder',
    value: 'Initial Value',
    rows: 2,
    disabled: false,
  },
} as Meta;

export const Normal: Story<Props> = ({ value, ...args }) => {
  const [_args, updateArgs] = useArgs();

  return (
    <Textarea
      {...args}
      value={value}
      onChange={(e) =>
        updateArgs({ value: (e.target as HTMLTextAreaElement).value })
      }
    />
  );
};
