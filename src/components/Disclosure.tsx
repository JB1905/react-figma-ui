import React, {
  useEffect,
  HTMLProps,
  ReactElement,
  DetailedHTMLProps,
  LiHTMLAttributes,
} from 'react';
import { disclosure } from 'figma-plugin-ds';
import sTrimmer from 's-trimmer';

interface DisclosureProps<T> extends Readonly<HTMLProps<HTMLUListElement>> {
  readonly tips: T[];
  render(...tipData: [T, number, T[]]): ReactElement;
}

interface DisclosureTipProps
  extends Readonly<
    DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
  > {
  readonly heading: string;
  readonly content: string;
  readonly section?: boolean;
  readonly expanded?: boolean;
  readonly labelProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly contentProps?: Readonly<HTMLProps<HTMLDivElement>>;
}

export function Disclosure<T extends object>({
  tips,
  render,
  className = '',
  ...props
}: DisclosureProps<T>) {
  useEffect(() => {
    disclosure.init();

    return () => disclosure.destroy();
  }, []);

  return (
    <ul {...props} className={sTrimmer(`disclosure ${className}`)}>
      {tips.map(render)}
    </ul>
  );
}

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
      className={sTrimmer(
        `disclosure__item ${className} ${
          expanded ? 'disclosure--expanded' : ''
        }`
      )}
    >
      <div
        {...labelRest}
        className={sTrimmer(
          `disclosure__label ${labelClassName} ${
            section ? 'disclosure--section' : ''
          }`
        )}
      >
        {heading}
      </div>

      <div
        {...contentRest}
        className={sTrimmer(`disclosure__content ${contentClassName}`)}
      >
        {content}
      </div>
    </li>
  );
};
