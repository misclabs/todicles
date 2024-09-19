# Todicles

A silly checklist app. This is mostly a project built to learn
the basics of [Lit](https://lit.dev/).

[Demo](http://misclabs.github.io/todicles)

## Setup

Just install the dependencies:

```bash
pnpm i
```

## Building

To build:

```bash
pnpm all
```

This will tidy everything with Prettier, check with eslint, compile Typescript sources, and package everything to the `docs` directory (for publishing w/ GitHub pages).

## Dev Server

Todicles uses [Web Dev Server](https://modern-web.dev/docs/dev-server/overview/) for local dev testing. Run the dev server with:

```bash
pnpm serve
```
