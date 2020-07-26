import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { SectionTitle } from '../src';

export default {
  title: 'SectionTitle',
  decorators: [withKnobs],
};

export const normal = () => (
  <SectionTitle>{text('Section Title', 'Section Title')}</SectionTitle>
);
