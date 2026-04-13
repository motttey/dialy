import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import nextVitals from 'eslint-config-next/core-web-vitals'
import tseslint from 'typescript-eslint';
import tsParser from "@typescript-eslint/parser";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([
    ...nextVitals,
    js.configs.recommended,
    ...tseslint.configs.recommended,
    globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
    {
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
      },
    },
    {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
]);
