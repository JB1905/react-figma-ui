import React, {
  useEffect,
  HTMLProps,
  ReactElement,
  DetailedHTMLProps,
  LiHTMLAttributes,
} from 'react';
import { disclosure } from 'figma-plugin-ds';

interface DisclosureProps extends Readonly<HTMLProps<HTMLUListElement>> {
  readonly items: any[];
  render(item: any): ReactElement;
}

interface DisclosureItemProps
  extends Readonly<
    DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
  > {
  renderHeading(): ReactElement;
  renderContent(): ReactElement;
  readonly section?: boolean;
  readonly expanded?: boolean;
  readonly labelProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly contentProps?: Readonly<HTMLProps<HTMLDivElement>>;
}

export const Disclosure: React.FC<DisclosureProps> = ({
  items,
  render,
  className = '',
  ...props
}) => {
  useEffect(() => {
    disclosure.init();

    return () => disclosure.destroy();
  }, []);

  return (
    <ul {...props} className={`disclosure ${className}`}>
      {items.map((item) => render(item))}
    </ul>
  );
};

export const DisclosureItem: React.FC<DisclosureItemProps> = ({
  section,
  expanded,
  renderHeading,
  renderContent,
  className = '',
  labelProps = {},
  contentProps = {},
  ...props
}) => {
  const { className: labelClassName = '', ...labelRest } = labelProps;
  const { className: contentClassName = '', ...contentRest } = contentProps;

  return (
    <li
      {...props}
      className={`disclosure__item ${className} ${
        expanded ? 'disclosure--expanded' : ''
      }`}
    >
      <div
        {...labelRest}
        className={`disclosure__label ${labelClassName} ${
          section ? 'disclosure--section' : ''
        }`}
      >
        {renderHeading()}
      </div>

      <div
        {...contentRest}
        className={`disclosure__content ${contentClassName}`}
      >
        {renderContent()}
      </div>
    </li>
  );
};
