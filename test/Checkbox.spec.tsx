import React from 'react';
import { render } from '@testing-library/react';

import { Checkbox } from '../src';

describe('Checkbox', () => {
  it('should render unchecked Checkbox', () => {
    const { container } = render(<Checkbox id="uniqueId">Label</Checkbox>);

    expect(container).toMatchSnapshot();
  });

  it('should render checked Checkbox', () => {
    const { container } = render(
      <Checkbox id="uniqueId" checked>
        Label
      </Checkbox>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render disabled Checkbox', () => {
    const { container } = render(
      <Checkbox id="uniqueId" disabled>
        Label
      </Checkbox>
    );

    expect(container).toMatchSnapshot();
  });
});
