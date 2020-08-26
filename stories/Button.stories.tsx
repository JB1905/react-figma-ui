import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button } from '../src';

import { Tint } from '../src/types';

interface Props {
  readonly tint: Tint;
  readonly destructive: boolean;
  readonly disabled: boolean;
  readonly label: string;
}

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    tint: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
    destructive: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} as Meta;

export const normal: Story<Props> = ({ label, ...args }) => (
  <Button {...args}>{label}</Button>
);

normal.args = {
  tint: 'primary',
  destructive: false,
  disabled: false,
  label: 'Label',
};
