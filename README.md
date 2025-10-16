# @intility/eslint-config-react-compiler

## Installation

```bash
npm install -D eslint@latest @intility/eslint-config-react-compiler@latest
```

## Basic Usage

```js
import { defineConfig } from "eslint/config";
import intilityReactCompilerConfig from "@intility/eslint-config-react-compiler";

export default defineConfig([
  {
    extends: [intilityReactCompilerConfig],
  },
]);
```
