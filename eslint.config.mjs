/**
Eslint Configs
 */

import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin"; // Changed from -js to the unified plugin name
import { PhoenixForgeTechnologies } from "./dx/eslint-plugin/custom-plugin.mjs";
import { builtinRules } from "eslint/use-at-your-own-risk";

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    {
        plugins: {
            // The key here can be whatever you want, but a common practice
            // is to use the full name or a simple alias like "@stylistic"
            "@stylistic": stylistic,
        },
        rules: {
            "no-unused-vars": "off",
            "no-prototype-builtins": "off",
            "no-undef": "off",
            "no-unexpected-multiline": "off",
            "no-var": "error",
            "no-useless-escape": "warn",
            "space-infix-ops": ["error", { "int32Hint": true }],
            // Change all rules from "@stylistic/js/..." to "@stylistic/..."
            "@stylistic/indent": ["error", 4],
            "@stylistic/spaced-comment": "error",
            "@stylistic/linebreak-style": ["error", "unix"],
            "@stylistic/no-trailing-spaces": "error",
            "@stylistic/eol-last": ["error", "always"],
            "@stylistic/no-multi-spaces": ["error", { ignoreEOLComments: true }],
            "@stylistic/no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
            "@stylistic/no-extra-semi": "error",
            "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
        },
    },
    PhoenixForgeTechnologies,
];
