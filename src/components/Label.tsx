import React from 'react';

interface Props {
  value: string;
}

export const Label: React.FC<Props> = ({ value }) => (
  <div className="label">{value}</div>
);
