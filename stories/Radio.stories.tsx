import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/addons';

import { Radio } from '../src';

interface Props {
  readonly checked: boolean;
  readonly disabled: boolean;
  readonly value: string;
}

export default {
  title: 'Radio',
  component: Radio,
  args: {
    checked: false,
    disabled: false,
    value: 'Radio Button',
  },
} as Meta;

export const normal: Story<Props> = ({ checked, value, ...args }) => {
  const [_args, updateArgs] = useArgs();

  return (
    <Radio
      {...args}
      id="radioButton"
      checked={checked}
      onClick={() => updateArgs({ checked: true })}
    >
      {value}
    </Radio>
  );
};
