import React from 'react';
import { render } from '@testing-library/react';

import { Radio } from '../src';

describe('Radio', () => {
  it('should render Radio button', () => {
    const { container } = render(
      <Radio value="Value" id="radioButton1" name="radioGroup" readOnly>
        Radio button
      </Radio>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render checked Radio button', () => {
    const { container } = render(
      <Radio value="Value" id="radioButton2" name="radioGroup" readOnly checked>
        Radio button
      </Radio>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render disabled Radio button', () => {
    const { container } = render(
      <Radio
        value="Value"
        id="radioButton3"
        name="radioGroup"
        readOnly
        disabled
      >
        Radio button
      </Radio>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Radio with custom className values', () => {
    const { container } = render(
      <Radio
        value="Value"
        id="radioButton3"
        name="radioGroup"
        readOnly
        className="custom-class-name"
        containerProps={{ className: 'custom-class-name' }}
        labelProps={{ className: 'custom-class-name' }}
      >
        Radio button
      </Radio>
    );

    expect(container).toMatchSnapshot();
  });
});
