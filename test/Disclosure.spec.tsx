import React from 'react';
import { render } from '@testing-library/react';

import { Disclosure, DisclosureItem } from '../src';

describe('Disclosure', () => {
  it('should render component matching snapshot', () => {
    const items = [
      { heading: 'Heading 1', content: 'Content 1', id: 1 },
      { heading: 'Heading 2', content: 'Content 2', id: 2 },
      { heading: 'Heading 3', content: 'Content 3', id: 3 },
    ];

    const { container } = render(
      <Disclosure
        items={items}
        render={(
          {
            heading,
            content,
            id,
          }: { heading: string; content: string; id: number },
          index: number
        ) => (
          <DisclosureItem
            heading={heading}
            content={content}
            section={index % 2 === 0}
            expanded={index % 2 === 1}
            key={id}
          />
        )}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
