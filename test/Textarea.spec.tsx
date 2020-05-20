import React from 'react';
import { render } from '@testing-library/react';

import { Textarea } from '../src';

describe('Textarea', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<Textarea value="" />);

    expect(container).toMatchSnapshot();
  });
});
