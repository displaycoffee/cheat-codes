import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	{
		ignores: ['*.js'],
	},
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2020,
			},
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		settings: {
			react: { version: 'detect' },
		},
	},
	js.configs.recommended,
	react.configs.flat.recommended,
	reactHooks.configs.flat.recommended,
	jsxA11y.flatConfigs.recommended,
	importPlugin.flatConfigs.errors,
	eslintConfigPrettier,
	{
		rules: {
			'prefer-const': 'error',
			'import/no-unresolved': 'off',
			'react/no-unescaped-entities': 'off',
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react-hooks/exhaustive-deps': 'error',
		},
	},
];
