# [React Figma UI](https://github.com/jb1905/react-figma-ui)

[![NPM version](http://img.shields.io/npm/v/react-figma-ui.svg?style=flat-square)](https://www.npmjs.com/package/react-figma-ui)
[![NPM downloads](http://img.shields.io/npm/dm/react-figma-ui.svg?style=flat-square)](https://www.npmjs.com/package/react-figma-ui)

## About
React implementation for [figma-plugin-ds](https://github.com/thomas-lowry/figma-plugin-ds/) by [Tom Lowry](https://github.com/thomas-lowry/)

## Demo
[**Playground – play with library in Storybook**](https://jb1905.github.io/react-figma-ui/)

## How to Install
First, install the library in your project by npm:
```sh
$ npm install react-figma-ui
```

Or Yarn:
```sh
$ yarn add react-figma-ui
```

## Components
### Button

```jsx
import { Button } from 'react-figma-ui';

// Primary
<Button tint="primary">Label</Button>
<Button tint="primary" destructive>Label</Button>
<Button tint="primary" disabled>Label</Button>

// Secondary
<Button tint="secondary">Label</Button>
<Button tint="secondary" destructive>Label</Button>
<Button tint="secondary" disabled>Label</Button>


// Tertirary (Hyperlink style button)
<Button tint="tertirary">Label</Button>
<Button tint="tertirary" destructive>Label</Button>
<Button tint="tertirary" disabled>Label</Button>
```

### Checkbox

```jsx
import { Checkbox } from 'react-figma-ui';

// Checkbox unchecked
<Checkbox>Label</Checkbox>

// Checkbox checked
<Checkbox checked>Label</Checkbox>

// Checkbox disabled
<Checkbox disabled>Label</Checkbox>
```

### Disclosure

```jsx
import { Disclosure, DisclosureItem } from 'react-figma-ui';

const items = [
  {
    heading: "",
    content: "",
  }
];

<Disclosure
  items={items}
  render={({ heading, content }) => (
    <DisclosureItem
      heading={heading}
      content={content}
      section={}
      expanded={}
    />
  )}
/>
```

### Icon

```jsx
import { Icon } from 'react-figma-ui';

// Icon
<Icon iconName="theme" />

// Icon with blue colorName to change color
<Icon iconName="theme" colorName="blue" />

// Spinner icon with spinning animation
<Icon iconName="spinner" spin />

// Text icon
<Icon>W</Icon>
```

### Icon button

```jsx
import { IconButton } from 'react-figma-ui';

//
<IconButton iconProps={{ iconName: 'blend' }} />

// Icon button with selected
<IconButton iconProps={{ iconName: 'blend' }} selected />
```

### Input

```jsx
import { Input } from 'react-figma-ui';

// Input with placeholder
<Input placeholder="Placeholder" />

// Input with initial value
<Input value="Initial value" />

// Disabled input
<Input value="Initial value" disabled />

// Input with icon
<Input value="Value" iconProps={{ iconName: 'angle' }} />
```

### Labels and sections

```jsx
import { Label } from 'react-figma-ui';

// Label
<Label>Label</Label>

// Section title
<SectionTitle>Section title</SectionTitle>
```

### Onboarding tip

```jsx
import { Onboarding } from 'react-figma-ui';

<Onboarding iconProps={{ iconName: 'styles' }}>
  Onboarding tip goes here.
</Onboarding>
```

### Radio button

```jsx
import { Radio } from 'react-figma-ui';

// Radio button
<Radio>Radio button</Radio>

// Radio button checked
<Radio checked>Radio button</Radio>

// Radio button disabled
<Radio disabled>Radio button</Radio>
```

### Select menu

```jsx
import { SelectMenu, SelectMenuOption } from 'react-figma-ui';

const options = [
  {
    value: ""
  }
];

<SelectMenu
  options={options}
  render={({}) => (
    <SelectMenuOption></SelectMenuOption>
  )}
/>
```

### Switch

```jsx
import { Switch } from 'react-figma-ui';

// Switch
<Switch id={}>
</Switch>

// Switch checked
<Switch id={}>
</Switch>

// Switch disabled
<Switch id={}>
</Switch>
```

### Textarea

```jsx
import { Textarea } from 'react-figma-ui';

// Textarea
<Textarea value="Initial value" rows={2} />

// Textarea disabled
<Textarea value="Initial value" rows={2} disabled />
```

### Type

```jsx
import { Type } from 'react-figma-ui';

<Type>UI11, size: xsmall (default) weight: normal, positive</Type>

<Type>UI13, size: large, weight: bold, positive</Type>

<Type size="large" weight="medium" inverse>UI12, size: large, weight: medium, negative</Type>
```

## License
This project is licensed under the MIT License © 2020-present Jakub Biesiada
