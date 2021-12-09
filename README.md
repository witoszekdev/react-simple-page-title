# react-simple-page-title

Change the `document.title` declaratively inside your React app - without any dependencies.

## Why?

I've wanted to simply change my page title dynamically in the SPA I was developing without any unnesesary features that could increase the bundle size.

⚠ This library doesn't support SSR - for alternatives see [Alternatives](#alternatives)

## Install

npm
```
npm install react-simple-page-title
```

yarn

```
yarn add react-simple-page-title
```

## Usage

### Component

```tsx
import { PageTitle } from 'react-simple-page-title';

const MyComponent = () => {
  return (
    <PageTitle title="Use this string as title of the page">
  )
}
```

### Hook

```tsx
import { usePageTitle } from 'react-simple-page-title';

const MyComponent = () => {
  usePageTitle("Use this string as title of the page");

  return (
    // ...
  )
}
```

## Alternatives

This library doesn't support SSR. For more advanced alternative that supports SSR check out [react-helmet](https://www.npmjs.com/package/react-helmet) or [react-head](https://github.com/tizmagik/react-head/).

If you're using a framework use a solution that was made for your framework:
- **Next.js**: [next/head](https://nextjs.org/docs/api-reference/next/head)
- **Gatsby**: [gatsby-plugin-react-head](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-head/), [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet)