import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Disclosure, DisclosureTip } from '../src';

const tips = [
  { heading: 'Heading 1', content: 'Content 1', id: 1 },
  { heading: 'Heading 2', content: 'Content 2', id: 2 },
  { heading: 'Heading 3', content: 'Content 3', id: 3 },
];

interface Props {
  readonly tips: typeof tips;
}

export default {
  title: 'Disclosure',
  args: { tips },
} as Meta;

export const Normal: Story<Props> = ({ tips }) => (
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
