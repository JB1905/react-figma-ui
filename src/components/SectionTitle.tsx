import React, { HTMLProps } from 'react';

import { combineClassNames } from '../helpers/combineClassNames';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const SectionTitle: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={combineClassNames(`section-title ${className}`)}>
    {children}
  </div>
);
