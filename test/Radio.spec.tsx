import React from 'react';
import { render } from '@testing-library/react';

import { Radio } from '../src';

describe('Radio', () => {
  it('should render Radio button', () => {
    const { container } = render(
      <Radio value="Value" name="radioGroup">
        Radio button
      </Radio>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render checked Radio button', () => {
    const { container } = render(
      <Radio value="Value" name="radioGroup" checked>
        Radio button
      </Radio>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render disabled Radio button', () => {
    const { container } = render(
      <Radio value="Value" name="radioGroup" disabled>
        Radio button
      </Radio>
    );

    expect(container).toMatchSnapshot();
  });
});
