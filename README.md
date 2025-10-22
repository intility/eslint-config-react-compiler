# @intility/eslint-config-react-compiler

This package is a minimal eslint config with only the React Compiler. This is intended for users of Biome, which doesn't support the compiler yet.

This is ment as a temporary solution, and once the React team ships support for rust-based tooling, this package can be removed.

If you're already a user of eslint, you should follow the [official React docs](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md#installation).

## Installation

```bash
npm install -D eslint @intility/eslint-config-react-compiler@latest
```

## Basic Usage

`eslint.config.js`:

```js
import intilityReactCompilerConfig from "@intility/eslint-config-react-compiler";

export default intilityReactCompilerConfig;
```

Or, if you need to configure eslint further:

```js
import { defineConfig } from "eslint/config";
import intilityReactCompilerConfig from "@intility/eslint-config-react-compiler";

export default defineConfig([
  intilityReactCompilerConfig,
  {
    rules: {},
  },
]);
```

## Vite

Vite setup with compiler and `vite-plugin-checker`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    checker({
      typescript: true,
      biome: {
        command: "check",
      },
      eslint: {
        lintCommand: "eslint",
        useFlatConfig: true,
      },
    }),
  ],
});
```
