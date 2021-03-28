import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Icon } from '../src';

import { iconNames } from '../src/constants/iconNames';

import type { IconName, ColorName } from '../src/types';

interface Props {
  readonly iconName: IconName;
  readonly iconColor: ColorName;
  readonly spin: boolean;
  readonly value: string;
}

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        options: iconNames,
      },
    },
  },
  args: {
    iconName: 'blend',
    spin: false,
    value: '',
  },
} as Meta;

export const Normal: Story<Props> = ({ value, ...args }) => (
  <Icon {...args}>{value}</Icon>
);
