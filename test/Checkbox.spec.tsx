import React from 'react';
import { render } from '@testing-library/react';

import { Checkbox } from '../src';

describe('Checkbox', () => {
  it('should render unchecked Checkbox', () => {
    const { container } = render(
      <Checkbox id="rick-astley">Never gonna give you up...</Checkbox>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render checked Checkbox', () => {
    const { container } = render(
      <Checkbox id="rick-astley" checked>
        Never gonna give you up...
      </Checkbox>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render disabled Checkbox', () => {
    const { container } = render(
      <Checkbox id="rick-astley" disabled>
        Never gonna give you up...
      </Checkbox>
    );

    expect(container).toMatchSnapshot();
  });
});
