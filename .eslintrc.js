// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "ecmaFeatures": {
            jsx: true,
            experimentalObjectRestSpread: true
        },
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'semi': 2,
    }
};
