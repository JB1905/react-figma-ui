import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Disclosure, DisclosureItem } from '../src';

const items = [
  { heading: 'Heading 1', content: 'Content 1', id: 1 },
  { heading: 'Heading 2', content: 'Content 2', id: 2 },
  { heading: 'Heading 3', content: 'Content 3', id: 3 },
];

interface Props {
  readonly items: typeof items;
}

export default {
  title: 'Disclosure',
  args: { items } as Props,
  parameters: {
    controls: {
      disabled: true,
    },
  },
} as Meta;

export const Normal: Story<Props> = ({ items }) => (
  <Disclosure
    items={items}
    render={({ heading, content, id }) => (
      <DisclosureItem
        heading={heading}
        content={content}
        section={id % 2 === 0}
        expanded={id === 1}
        key={id}
        onClick={() => null} // TODO
      />
    )}
  />
);
