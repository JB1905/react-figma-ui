import React from 'react';

import { Disclosure, DisclosureItem } from '../src';

export default {
  title: 'Disclosure',
};

const items = [
  { heading: 'Heading 1', content: 'Content 1', id: 1 },
  { heading: 'Heading 2', content: 'Content 2', id: 2 },
  { heading: 'Heading 3', content: 'Content 3', id: 3 },
];

export const normal = () => (
  <Disclosure
    items={items}
    render={({ heading, content, id }) => (
      <DisclosureItem
        renderHeading={() => <p>{heading}</p>}
        renderContent={() => <p>{content}</p>}
        section={id % 2 === 0}
        expanded={id === 1}
        key={id}
      />
    )}
  />
);
