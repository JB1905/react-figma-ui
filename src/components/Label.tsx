import React, { HTMLProps } from 'react';

import { combineClassNames } from '../helpers/combineClassNames';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const Label: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={combineClassNames(`label ${className}`)}>
    {children}
  </div>
);
