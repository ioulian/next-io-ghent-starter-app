# next-io-ghent-starter kit (Next.js v13)

This is a [Next.js](https://nextjs.org/) starter kit created to be used as a
template to start new projects in iO Ghent campus. The idea behind is that you
can directly start on working on your project instead of setting up Next.js
first.

It contains a lot of useful presets and common components to be used in your
project. Using latest technologies and dev tools we allow developers to focus on
the project first.

## Features

- "Full" Typescript: All project code is written in Typescript where possible.
- [Translations](https://next-intl-docs.vercel.app/): Allow using intellisense (with TS) for translations and custom
  scripts to check if translations are complete
- Styling using [linaria](https://github.com/callstack/linaria)
- Bundle analyser (Provided by Next.js)
- [NVM](https://github.com/nvm-sh/nvm) preset
- .env variables (Provided by Next.js)
- PWA ready (Using [next-pwa](https://www.npmjs.com/package/next-pwa))
- REDUX with server hydration ([next-redux-wrapper](https://www.npmjs.com/package/next-redux-wrapper)). Can keep state in cookies ([next-redux-cookie-wrapper](https://www.npmjs.com/package/next-redux-cookie-wrapper))
- [SVG Sprites](https://www.npmjs.com/package/svg-sprite-loader) (Custom or with
  [Tabler icons](https://tabler-icons.io/))
- Font optimisation (Provided by Next.js)
- [Storybook](https://github.com/storybookjs/storybook) with a11y checks and Next.js support.
- Common components preset (with a11y in mind): <https://ioulian.github.io/next-io-ghent-starter/>

## Getting Started

### Install

```bash
npx create-next-app --example https://github.com/ioulian/next-io-ghent-starter-app
npm run dev
```

### Remove demo content

- Remove content from `pages/index.tsx` and `pages/serverside.tsx`
- Remove `src/features/counter` (also from `src/store/store.ts`) and `src/components/Demo.ts`

## Go live checklist

- `.env`
- `i18n.config.js`
- `.gitignore` Generated files should be enabled if no build step exists
- Sharp version can be upgraded to newer one. To support old OSX versions we
  use older version.

## Build

On build step, we run some basic production checks. You should disable them if
they are not needed.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub
repository](https://github.com/vercel/next.js/) - your feedback and
contributions are welcome!

## Issues/TODO's

Issues and TODO's can be found here: <https://github.com/ioulian/next-io-ghent-starter-app/issues>

## Component export convention

We use `export default` in an component, see discussion here: <https://esdiscuss.org/topic/moduleimport>
