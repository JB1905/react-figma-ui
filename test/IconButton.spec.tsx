import React from 'react';
import { render } from '@testing-library/react';

import { IconButton } from '../src';

describe('IconButton', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<IconButton />);

    expect(container).toMatchSnapshot();
  });
});
