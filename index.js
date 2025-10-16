import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

// @ts-check

export default defineConfig([
	globalIgnores(["**/dist/", "**/build/"]),
	tseslint.configs.base,
	reactHooks.configs.flat.recommended,
	{
		files: ["src/**/*.{js,jsx,ts,tsx}"],
	},
]);