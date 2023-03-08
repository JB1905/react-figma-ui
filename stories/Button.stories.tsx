import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button } from '../src';

import { tints } from '../src/constants';

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
      options: tints,
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    tint: 'primary',
    destructive: false,
    disabled: false,
    label: 'Label',
  } as Props,
} as Meta;

export const Normal: Story<Props> = ({ label, ...args }) => (
  <Button {...args}>{label}</Button>
);
