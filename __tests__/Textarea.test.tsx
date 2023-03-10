import React from 'react';
import { render } from '@testing-library/react';

import { Textarea } from '../src';

describe('Textarea', () => {
  it('should render Textarea', () => {
    // TODO onChange
    const { container } = render(
      <Textarea value="Initial value" rows={2} readOnly />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render disabled Textarea', () => {
    const { container } = render(
      <Textarea value="Initial value" rows={2} readOnly disabled />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Textarea with custom className', () => {
    const { container } = render(
      <Textarea
        value="Initial value"
        className="custom-class-name"
        rows={2}
        readOnly
      />
    );

    expect(container).toMatchSnapshot();
  });

  // TODO disabled
});
