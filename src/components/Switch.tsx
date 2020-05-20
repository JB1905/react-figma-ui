import React from 'react';

export const Switch: React.FC = () => (
  <div className="switch">
    <input className="switch__toggle" type="checkbox" id="uniqueId" />

    <label className="switch__label" htmlFor="uniqueIdA">
      Label
    </label>
  </div>
);
