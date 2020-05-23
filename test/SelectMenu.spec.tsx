import React from 'react';
import { render } from '@testing-library/react';

import { SelectMenu, SelectMenuOption } from '../src';

describe('SelectMenu', () => {
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ];

  it('should render SelectMenu', () => {
    const { container } = render(
      <SelectMenu
        options={options}
        render={({ value, label }) => (
          <SelectMenuOption value={value} key={value}>
            {label}
          </SelectMenuOption>
        )}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render SelectMenu with custom className', () => {
    const { container } = render(
      <SelectMenu
        options={options}
        className="custom-class-name"
        render={({ value, label }) => (
          <SelectMenuOption value={value} key={value}>
            {label}
          </SelectMenuOption>
        )}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
