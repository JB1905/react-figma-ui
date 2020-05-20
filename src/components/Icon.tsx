import React, { HTMLProps } from 'react';

type IconName =
  | 'adjust'
  | 'alert'
  | 'angle'
  | 'arrow-left-right'
  | 'updown'
  | 'auto-layout-horizontal'
  | 'auto-layout-vertical'
  | 'back'
  | 'blend-empty'
  | 'blend'
  | 'break'
  | 'caret-down'
  | 'caret-left'
  | 'caret-right'
  | 'caret-up'
  | 'check'
  | 'close'
  | 'component'
  | 'corner-radius'
  | 'corners'
  | 'distribute-horizontal-spacing'
  | 'distribute-vertical-spacing'
  | 'draft'
  | 'effects'
  | 'ellipses'
  | 'eyedropper'
  | 'forward'
  | 'frame'
  | 'group'
  | 'hidden'
  | 'horizontal-padding'
  | 'hyperlink'
  | 'image'
  | 'instance'
  | 'key'
  | 'layout-align-bottom'
  | 'icon-align-horizontal-centers'
  | 'align-left'
  | 'align-right'
  | 'align-top'
  | 'align-vertical-centers'
  | 'layout-grid-columns'
  | 'layout-grid-rows'
  | 'layout-grid-uniform'
  | 'library'
  | 'link-broken'
  | 'link-connected'
  | 'list-detailed'
  | 'list-tile'
  | 'list'
  | 'lock-off'
  | 'lock-on'
  | 'minus'
  | 'play'
  | 'plus'
  | 'random'
  | 'recent'
  | 'resize-to-fit'
  | 'resolve-folled'
  | 'resolve'
  | 'reverse'
  | 'search-large'
  | 'search'
  | 'settings'
  | 'share'
  | 'smiley'
  | 'sort-alpha-asc'
  | 'sort-alpha-dsc'
  | 'sort-top-bottom'
  | 'spacing'
  | 'spinner'
  | 'star-off'
  | 'star-on'
  | 'stroke-weight'
  | 'styles'
  | 'swap'
  | 'theme'
  | 'tidy-up-grid'
  | 'tidy-up-list-horizontal'
  | 'tidy-up-list-vertical'
  | 'timer'
  | 'trash'
  | 'vertical-padding'
  | 'visible'
  | 'warning-large'
  | 'warning';

type ColorName =
  | 'blue'
  | 'purple'
  | 'purple4'
  | 'hot-pink'
  | 'green'
  | 'red'
  | 'yellow'
  | 'black'
  | 'black8'
  | 'black3'
  | 'white'
  | 'white8'
  | 'white4';

export interface Props extends HTMLProps<HTMLDivElement> {
  iconName: IconName;
  spin: boolean;
  colorName: ColorName;
}

export const Icon: React.FC<Props> = ({
  children,
  iconName,
  className = '',
  spin,
  colorName,
  ...props
}) => (
  <div
    {...props}
    className={`icon ${iconName ? `icon--${iconName}` : ''} ${
      spin ? `icon--spin` : ''
    } ${colorName ? `icon--${colorName}` : ''} ${className}`}
  >
    {children}
  </div>
);
