import React from 'react';
import { render } from '@testing-library/react';

import { SectionTitle } from '../src';

describe('SectionTitle', () => {
  it('should render Section title', () => {
    const { getByText, container } = render(
      <SectionTitle>Section title</SectionTitle>
    );

    expect(getByText('Section title')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render Section title with custom className', () => {
    const { getByText, container } = render(
      <SectionTitle className="custom-class-name">
        Another section title
      </SectionTitle>
    );

    expect(getByText('Another section title')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
