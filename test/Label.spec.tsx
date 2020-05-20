import React from 'react';
import { render } from '@testing-library/react';

import { Label } from '../src';

describe('Label', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<Label>Lorem ipsum dolor</Label>);

    expect(container).toMatchSnapshot();
  });
});
