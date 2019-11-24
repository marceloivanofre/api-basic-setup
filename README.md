# NodeJS Project Skeleton Settings

Basic setup and structure for starting API projects with Node.js, Express, and MongoDB

## Prettier + ESLint + Airbnb Style Guide

- Download the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) exntensions for VSCode.
- Install Prettier and ESLint libraries:
  ```
  npm install -D eslint prettier
  ```
- Install the [Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb):
  ```
  npx install-peerdeps --dev eslint-config-airbnb
  ```
- Install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier):
  ```
  npm install -D eslint-config-prettier eslint-plugin-prettier
  ```
- Create `.eslintrc.json` in your project's root directory and add:
  ```
  {
    "extends": ["airbnb", "prettier"],
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": ["error"]
    }
  }
  ```
- Create `.prettierrc` file in your project’s root directory:
  ```
  {
    "singleQuote": true
  }
  ```
- Insert `"editor.formatOnSave": true` into your settings in VSCode.
