import React from 'react';

export const Input: React.FC = () => (
  <div className="input input--with-icon">
    <div className="icon icon--angle" />

    <input type="input" className="input__field" value="Value" />
  </div>
);
