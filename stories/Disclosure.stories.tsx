import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Disclosure, DisclosureItem } from '../src';

export default {
  title: 'Disclosure',
  parameters: {
    controls: {
      disabled: true,
    },
  },
} as Meta;

const items = [
  { heading: 'Heading 1', content: 'Content 1', id: 1 },
  { heading: 'Heading 2', content: 'Content 2', id: 2 },
  { heading: 'Heading 3', content: 'Content 3', id: 3 },
];

export const Normal: Story = () => (
  <Disclosure
    items={items}
    render={({ heading, content, id }) => (
      <DisclosureItem
        heading={heading}
        content={content}
        section={id % 2 === 0}
        expanded={id === 1}
        key={id}
      />
    )}
  />
);
