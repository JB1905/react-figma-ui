import React from 'react';
import { render } from '@testing-library/react';

import { Type } from '../src';

describe('Type', () => {
  it('should render Type with default values', () => {
    const { getByText, container } = render(<Type>Lorem ipsum dolor</Type>);

    expect(getByText('Lorem ipsum dolor')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render Type with large size, bold weight and inverse option', () => {
    const { getByText, container } = render(
      <Type size="large" weight="bold" inverse>
        Lorem ipsum dolor sit
      </Type>
    );

    expect(getByText('Lorem ipsum dolor sit')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render Type with custom className', () => {
    const { getByText, container } = render(
      <Type className="custom-class-name">Lorem ipsum dolor sit amet</Type>
    );

    expect(getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
