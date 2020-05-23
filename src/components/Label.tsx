import React, { HTMLProps } from 'react';

import { trimClassNames } from '../helpers/combineClassNames';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const Label: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={trimClassNames(`label ${className}`)}>
    {children}
  </div>
);
