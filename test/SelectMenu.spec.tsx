import React from 'react';
import { render } from '@testing-library/react';

import { SelectMenu, SelectMenuOption } from '../src';

describe('SelectMenu', () => {
  it('should render component matching snapshot', () => {
    const options = [
      { value: 1, label: 'Option 1' },
      { value: 2, label: 'Option 2' },
      { value: 3, label: 'Option 3' },
    ];

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
});
