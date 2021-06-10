import React from 'react';
import { Meta, Story } from '@storybook/react';

import { SectionTitle } from '../src';

interface Props {
  readonly sectionTitle: string;
}

export default {
  title: 'SectionTitle',
  component: SectionTitle,
  args: {
    sectionTitle: 'Section Title',
  } as Props,
} as Meta;

export const Normal: Story<Props> = ({ sectionTitle }) => (
  <SectionTitle>{sectionTitle}</SectionTitle>
);
