import React from 'react';
import { render } from '@testing-library/react';

import { Type } from '.';

describe('Type', () => {
  it('should render Type with default values', () => {
    const { container } = render(<Type>Lorem ipsum dolor</Type>);

    expect(container).toMatchSnapshot();
  });

  it('should render Type with large size, bold weight and inverse option', () => {
    const { container } = render(
      <Type size="large" weight="bold" inverse>
        Lorem ipsum dolor
      </Type>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Type with custom className', () => {
    const { container } = render(
      <Type className="custom-class-name">Lorem ipsum dolor</Type>
    );

    expect(container).toMatchSnapshot();
  });
});
