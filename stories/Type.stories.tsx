import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Type } from '../src';

import { Size, Weight } from '../src/types';

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
        type: 'radio',
        options: ['small', 'large', 'xlarge'],
      },
    },
    weight: {
      control: {
        type: 'radio',
        options: ['medium', 'bold'],
      },
    },
    inverse: { control: 'boolean' },
    text: { control: 'text' },
  },
} as Meta;

export const normal: Story<Props> = ({ text, ...args }) => (
  <Type {...args}>{text}</Type>
);

normal.args = {
  size: 'small',
  weight: 'medium',
  inverse: false,
  text: 'Hello World!',
};
