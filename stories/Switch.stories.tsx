import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/addons';

import { Switch } from '../src';

interface Props {
  readonly checked: boolean;
  readonly disabled: boolean;
  readonly value: string;
}

export default {
  title: 'Switch',
  component: Switch,
  args: {
    checked: false,
    disabled: false,
    value: 'Label',
  } as Props,
} as Meta;

export const Normal: Story<Props> = ({ checked, value, ...args }) => {
  const [_args, updateArgs] = useArgs();

  return (
    <Switch
      {...args}
      id="uniqueId"
      checked={checked}
      onChange={(e) => updateArgs({ checked: e.target.checked })}
    >
      {value}
    </Switch>
  );
};
