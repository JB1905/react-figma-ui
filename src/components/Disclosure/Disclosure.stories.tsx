import React from 'react';

import { Disclosure, DisclosureTip } from '../src';

export default {
  title: 'Disclosure',
};

const tips = [
  { heading: 'Heading 1', content: 'Content 1', id: 1 },
  { heading: 'Heading 2', content: 'Content 2', id: 2 },
  { heading: 'Heading 3', content: 'Content 3', id: 3 },
];

export const normal = () => (
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
