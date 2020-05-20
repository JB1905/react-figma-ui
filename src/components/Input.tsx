import React from 'react';

import { Icon } from './Icon';

interface Props {}

export const Input: React.FC<Props> = () => (
  <div className="input input--with-icon">
    <Icon />

    <input type="input" className="input__field" value="Value" />
  </div>
);
