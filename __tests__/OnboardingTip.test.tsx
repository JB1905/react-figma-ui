import React from 'react';
import { render } from '@testing-library/react';

import { OnboardingTip } from '../src';

describe('OnboardingTip', () => {
  it('should render OnboardingTip', () => {
    const { container } = render(
      <OnboardingTip iconProps={{ iconName: 'styles' }}>
        Onboarding tip goes here.
      </OnboardingTip>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render OnboardingTip with custom className', () => {
    const { container } = render(
      <OnboardingTip
        iconProps={{ iconName: 'styles' }}
        className="custom-class-name"
        containerProps={{ className: 'custom-class-name' }}
      >
        Onboarding tip goes here.
      </OnboardingTip>
    );

    expect(container).toMatchSnapshot();
  });
});
