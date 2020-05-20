import React from 'react';
import { render } from '@testing-library/react';

import { Disclosure, DisclosureItem } from '../src';

describe('Disclosure', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<Disclosure>{}</Disclosure>);

    expect(container).toMatchSnapshot();
  });
});
