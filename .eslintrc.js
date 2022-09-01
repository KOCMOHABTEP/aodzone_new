module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },

    env: {
        browser: true,
        node: true,
        es6: true,
    },

    settings: {
        react: {
            version: "detect",
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },

    plugins: ["@typescript-eslint"],
    extends: [
        // "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base",
        "airbnb/rules/react",
        "prettier",
        "plugin:prettier/recommended",
        "plugin:sonarjs/recommended",
        "plugin:security/recommended",
        "plugin:react-hooks/recommended",
    ],

    rules: {
        "import/no-unresolved": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".ts", ".tsx", ".js", ".jsx"],
            },
        ],
        "react/jsx-props-no-spreading": "off",
        "react/jsx-boolean-value": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "no-nested-ternary": "off",
        "import/prefer-default-export": "off",
        "react/prop-types": "off",
        "react/no-unused-prop-types": "off",
        "react/require-default-props": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-param-reassign": "off",
    },
};
