# Clarity #

## Installation ##

```bash
$ git clone https://github.com/devonzuegel/clarity
$ cd clarity
$ npm install
```

## Usage ##

All commands defaults to development environment. You can set `NODE_ENV` to `production` or use the shortcuts below.

```bash
# Running

$ npm start # This starts the app in development mode

# Starting it with the production build
$ NODE_ENV=production npm start # or
$ npm run start:prod

# Building 

$ npm build # This builds the app in development mode

# Commands below builds the production build
$ NODE_ENV=production npm build # or
$ npm run build:prod

# Testing
$ npm test
```

## Linters & Autoformatters ##

- `stylefmt -r **/*.css -c .stylelintrc` for fixing CSS errors
- `tslint --fix src/**/*.ts` for fixing Typescript errors

## Notes ##

```bash
# If you want install additional libraries, you can also install their typings from DefinitelyTyped
$ typings install dt~<package> --global --save
# or if it's located on npm
$ typings install <package> --save
```
