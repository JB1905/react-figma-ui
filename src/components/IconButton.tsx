import React from 'react';

import { Icon } from './Icon';

interface Props {}

export const IconButton: React.FC<Props> = () => (
  <div className="icon-button icon-button--selected">
    <Icon />
  </div>
);
