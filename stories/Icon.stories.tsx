import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Icon } from '../src';

import { iconNames } from '../src/constants/iconNames';
import { colorNames } from '../src/constants/colorNames';

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
      options: iconNames,
      control: {
        type: 'select',
      },
    },
    colorName: {
      options: colorNames,
      control: {
        type: 'select',
      },
    },
  },
  args: {
    iconName: 'blend',
    colorName: 'black',
    spin: false,
    value: '',
  },
} as Meta;

export const Normal: Story<Props> = ({ value, ...args }) => (
  <Icon {...args}>{value}</Icon>
);
