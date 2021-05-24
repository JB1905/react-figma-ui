import React from 'react';
import { Meta, Story } from '@storybook/react';

import { IconButton } from '../src';

import { iconNames } from '../src/constants/iconNames';

import type { IconName } from '../src/types';

interface Props {
  readonly iconName: IconName;
  readonly selected: boolean;
}

export default {
  title: 'IconButton',
  argTypes: {
    iconName: {
      options: iconNames,
      control: {
        type: 'select',
      },
    },
  },
  args: {
    iconName: 'theme',
    selected: false,
  } as Props,
} as Meta;

export const Normal: Story<Props> = ({ iconName, ...args }) => (
  <IconButton {...args} iconProps={{ iconName }} />
);
