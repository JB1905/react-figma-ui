import React, { useEffect } from 'react';
import { disclosure } from 'figma-plugin-ds';

interface Props {}

export const Disclosure: React.FC<Props> = () => {
  useEffect(() => {
    disclosure.init();

    return () => disclosure.destroy();
  }, []);

  return (
    <ul className="disclosure">
      <li className="disclosure__item disclosure--expanded">
        <div className="disclosure__label disclosure--section">
          Disclosure heading
        </div>
        <div className="disclosure__content">Panel content here</div>
      </li>

      <li className="disclosure__item disclosure--expanded">
        <div className="disclosure__label">Disclosure heading</div>
        <div className="disclosure__content">Panel content here</div>
      </li>

      <li className="disclosure__item">
        <div className="disclosure__label">Disclosure heading</div>
        <div className="disclosure__content">Panel content here</div>
      </li>
    </ul>
  );
};
