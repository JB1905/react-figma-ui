import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button } from '../src';

import { tints } from '../src/constants/tints';

import type { Tint } from '../src/types';

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
        type: 'select',
        options: tints,
      },
    },
  },
  args: {
    tint: 'primary',
    destructive: false,
    disabled: false,
    label: 'Label',
  },
} as Meta;

export const Normal: Story<Props> = ({ label, ...args }) => (
  <Button {...args}>{label}</Button>
);
