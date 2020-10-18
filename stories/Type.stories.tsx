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
