import React from 'react';
import { render } from '@testing-library/react';

import { Textarea } from '../src';

describe('Textarea', () => {
  it('should render Textarea', () => {
    const { container } = render(<Textarea value="Initial value" rows={2} />);

    expect(container).toMatchSnapshot();
  });

  it('should render disabled Textarea', () => {
    const { container } = render(
      <Textarea value="Initial value" rows={2} disabled />
    );

    expect(container).toMatchSnapshot();
  });
});
