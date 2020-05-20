import React, { HTMLProps, useEffect } from 'react';
import { disclosure } from 'figma-plugin-ds';

interface Props {
  items: any[];
  section?: boolean;
  expanded?: boolean;
  disclosureProps?: HTMLProps<HTMLUListElement>;
  itemProps?: HTMLProps<HTMLDataListElement>;
  labelProps?: HTMLProps<HTMLDivElement>;
  contentProps?: HTMLProps<HTMLDivElement>;
}

export const Disclosure: React.FC<Props> = ({
  items,
  section,
  expanded,
  disclosureProps,
  itemProps,
  labelProps,
  contentProps,
}) => {
  useEffect(() => {
    disclosure.init();

    return () => disclosure.destroy();
  }, []);

  return (
    <ul className="disclosure">
      {items.map((item) => (
        <li className="disclosure__item disclosure--expanded" key={null}>
          <div className="disclosure__label disclosure--section">
            Disclosure heading
          </div>
          <div className="disclosure__content">Panel content here</div>
        </li>
      ))}
    </ul>
  );
};
