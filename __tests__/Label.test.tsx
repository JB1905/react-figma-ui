import React from 'react';
import { render } from '@testing-library/react';

import { Label } from '../src';

describe('Label', () => {
  it('should render Label', () => {
    const { getByText, container } = render(<Label>Label</Label>);

    expect(getByText('Label')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render Label with custom className', () => {
    const { getByText, container } = render(
      <Label className="custom-class-name">Hello World!</Label>
    );

    expect(getByText('Hello World!')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
