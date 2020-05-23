import React from 'react';
import { render } from '@testing-library/react';

import { SectionTitle } from '../src';

describe('SectionTitle', () => {
  it('should render Section title', () => {
    const { container } = render(<SectionTitle>Section title</SectionTitle>);

    expect(container).toMatchSnapshot();
  });

  it('should render Section title with custom className', () => {
    const { container } = render(
      <SectionTitle className="custom-class-name">Section title</SectionTitle>
    );

    expect(container).toMatchSnapshot();
  });
});
