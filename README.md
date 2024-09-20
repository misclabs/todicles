# Todicles

A silly checklist app. This is mostly a project built to learn
the basics of [Lit](https://lit.dev/).

[Demo](http://misclabs.github.io/todicles)

## Setup

Just install the dependencies:

```bash
pnpm i
```

## Build Configuration

In general all build scripts are configured by the `MODE` environemnt variable. When set to `dev` (the default):

- builds to `test/build`
- dev serve from `test`

If `MODE` is `prod`:

- builds to `docs` for hosting on GitHub pages.
- dev serve from `docs`

Setting `MODE` should work for all build scripts including watching and serving.

## Building

To do everything:

```bash
pnpm all
```

This will tidy everything with Prettier, check with eslint, compile Typescript sources, and package everything together. `pnpm pub` is a shortcut for `MODE=prod pnpm all`.

## Dev Server

Run the dev server with:

```bash
pnpm serve
```
