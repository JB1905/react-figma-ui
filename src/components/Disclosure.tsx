import React, {
  useEffect,
  HTMLProps,
  ReactElement,
  DetailedHTMLProps,
  LiHTMLAttributes,
} from 'react';
import { disclosure } from 'figma-plugin-ds';

import { combineClassNames } from '../helpers/combineClassNames';

interface DisclosureProps extends Readonly<HTMLProps<HTMLUListElement>> {
  readonly tips: any[];
  render(...tipData: [any, number, any[]]): ReactElement;
}

interface DisclosureTipProps
  extends Readonly<
    DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
  > {
  readonly heading: ReactElement;
  readonly content: ReactElement;
  readonly section?: boolean;
  readonly expanded?: boolean;
  readonly labelProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly contentProps?: Readonly<HTMLProps<HTMLDivElement>>;
}

export const Disclosure: React.FC<DisclosureProps> = ({
  tips,
  render,
  className = '',
  ...props
}) => {
  useEffect(() => {
    disclosure.init();

    return () => disclosure.destroy();
  }, []);

  return (
    <ul {...props} className={combineClassNames(`disclosure ${className}`)}>
      {tips.map((...tipData) => render(...tipData))}
    </ul>
  );
};

export const DisclosureTip: React.FC<DisclosureTipProps> = ({
  section,
  expanded,
  heading,
  content,
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
      className={combineClassNames(
        `disclosure__item ${className} ${
          expanded ? 'disclosure--expanded' : ''
        }`
      )}
    >
      <div
        {...labelRest}
        className={combineClassNames(
          `disclosure__label ${labelClassName} ${
            section ? 'disclosure--section' : ''
          }`
        )}
      >
        {heading}
      </div>

      <div
        {...contentRest}
        className={combineClassNames(`disclosure__content ${contentClassName}`)}
      >
        {content}
      </div>
    </li>
  );
};
