import React from 'react';
import { render } from '@testing-library/react';

import { Disclosure, DisclosureTip } from '.';

describe('Disclosure', () => {
  const tips = [
    { heading: 'Heading 1', content: 'Content 1', id: 1 },
    { heading: 'Heading 2', content: 'Content 2', id: 2 },
    { heading: 'Heading 3', content: 'Content 3', id: 3 },
  ];

  it('should render Disclosure', () => {
    const { container } = render(
      <Disclosure
        tips={tips}
        render={({ heading, content, id }, index) => (
          <DisclosureTip
            heading={heading}
            content={content}
            section={index % 2 === 0}
            expanded={id === 1}
            key={id}
          />
        )}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Disclosure with custom className values', () => {
    const { container } = render(
      <Disclosure
        tips={tips}
        className="custom-class-name"
        render={({ heading, content, id }) => (
          <DisclosureTip
            heading={heading}
            content={content}
            className="custom-class-name"
            labelProps={{ className: 'custom-class-name' }}
            contentProps={{ className: 'custom-class-name' }}
            section={id % 2 === 0}
            expanded={id === 1}
            key={id}
          />
        )}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
