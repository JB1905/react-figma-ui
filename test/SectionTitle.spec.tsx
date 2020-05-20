import React from 'react';
import { render } from '@testing-library/react';

import { SectionTitle } from '../src';

describe('SectionTitle', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<SectionTitle>Hello</SectionTitle>);

    expect(container).toMatchSnapshot();
  });
});
