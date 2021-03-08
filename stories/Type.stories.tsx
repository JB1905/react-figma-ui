import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Type } from '../src';

import type { Size, Weight } from '../src/types';

interface Props {
  readonly size: Size;
  readonly weight: Weight;
  readonly inverse: boolean;
  readonly text: string;
}

export default {
  title: 'Type',
  component: Type,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'large', 'xlarge'],
      },
    },
    weight: {
      control: {
        type: 'select',
        options: ['medium', 'bold'],
      },
    },
  },
  args: {
    size: 'small',
    weight: 'medium',
    inverse: false,
    text: 'Hello World!',
  },
} as Meta;

export const Normal: Story<Props> = ({ text, ...args }) => (
  <Type {...args}>{text}</Type>
);
