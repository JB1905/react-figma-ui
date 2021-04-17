import React from 'react';
import { render } from '@testing-library/react';

import { Checkbox } from '../src';

describe('Checkbox', () => {
  it('should render unchecked Checkbox', () => {
    const { container } = render(
      <Checkbox id="uniqueId" readOnly>
        Label
      </Checkbox>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render checked Checkbox', () => {
    const { container } = render(
      <Checkbox id="uniqueId" readOnly checked>
        Label
      </Checkbox>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render disabled Checkbox', () => {
    const { container } = render(
      <Checkbox id="uniqueId" readOnly disabled>
        Label
      </Checkbox>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Checkbox with custom className values', () => {
    const { container } = render(
      <Checkbox
        id="uniqueId"
        className="custom-class-name"
        containerProps={{ className: 'custom-class-name' }}
        labelProps={{ className: 'custom-class-name' }}
      >
        Label
      </Checkbox>
    );

    expect(container).toMatchSnapshot();
  });
});
