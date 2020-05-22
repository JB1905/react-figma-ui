import React from 'react';
import { render } from '@testing-library/react';

import { SectionTitle } from '../src';

describe('SectionTitle', () => {
  it('should render Section title', () => {
    const { container } = render(<SectionTitle>Section title</SectionTitle>);

    expect(container).toMatchSnapshot();
  });
});
