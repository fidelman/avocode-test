# Ataccama Test

[DEMO](https://avocode-test.herokuapp.com/)

## Contents
- [Development](#development)
- [CI/CD](#cicd)

## Development
### Install Dependencies
```
npm i
```
P.S Use NPM instead of yarn. Heroku supports only one lock file, which was chosen package-lock from NPM. Thank you for understanding.

### Commands
- Run dev server `npm start`
- Run tests `npm t`
- Run tests in browser `npm run cypress`

### File Structure
The boilerplate was extended from [create-react-app](https://github.com/facebook/create-react-app)
- cypress - Files for Testing with [Cypress.io](https://www.cypress.io)
- .circleci - Setting for Circle CI
- src - Source code of the App
  - App.js - Example
  - Resizer.js - Resizer Component
  - index.js - Entry point

## CICD
- There is _pre-commit_ hook, which runs prettier.
- Master branch is connected to the [PROD env](https://avocode-test.herokuapp.com/) via Heroku.
- Circle CI is set for pull requests, which checks e2e tests.