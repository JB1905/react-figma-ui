import React from 'react';
import { render } from '@testing-library/react';

import { Label } from '../src';

describe('Label', () => {
  it('should render Label', () => {
    const { container } = render(<Label>Label</Label>);

    expect(container).toMatchSnapshot();
  });

  it('should render Label with custom className', () => {
    const { container } = render(
      <Label className="custom-class-name">Label</Label>
    );

    expect(container).toMatchSnapshot();
  });
});
