module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "jest": true
    },
    "extends": [
        // "eslint:recommended",
        // "plugin:react/recommended",
        // "plugin:@typescript-eslint/recommended",
        // "prettier/@typescript-eslint",
        // "plugin:prettier/recommended"
        // "airbnb",

       "airbnb-typescript",
       "airbnb/hooks",
       "plugin:@typescript-eslint/eslint-recommended",
       "plugin:@typescript-eslint/recommended", 
       "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "settings": {
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }]
    }
};
