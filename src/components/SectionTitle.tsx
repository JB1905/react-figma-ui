import React, { HTMLProps } from 'react';

import { trimClassNames } from '../helpers/combineClassNames';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const SectionTitle: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={trimClassNames(`section-title ${className}`)}>
    {children}
  </div>
);
