import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Disclosure, DisclosureTip } from '../src';

export default {
  title: 'Disclosure',
  parameters: {
    controls: {
      disable: true,
    },
  },
} as Meta;

const tips = [
  { heading: 'Heading 1', content: 'Content 1', id: 1 },
  { heading: 'Heading 2', content: 'Content 2', id: 2 },
  { heading: 'Heading 3', content: 'Content 3', id: 3 },
];

export const Normal: Story = () => (
  <Disclosure
    tips={tips}
    render={({ heading, content, id }) => (
      <DisclosureTip
        heading={heading}
        content={content}
        section={id % 2 === 0}
        expanded={id === 1}
        key={id}
      />
    )}
  />
);
