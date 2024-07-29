import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
    ignorePatterns: ["node_modules/", "dist/", "**/.*"],
});
const config = [...compat.extends("next/core-web-vitals", "plugin:storybook/recommended")];

export default config;