# Clarity #

## Installation ##

```bash
$ git clone https://github.com/devonzuegel/clarity
$ cd clarity
$ yarn install
```

## Usage ##

All commands defaults to development environment. You can set `NODE_ENV` to `production` or use the `npm` commands below.

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
$ npm test    # One-time run
$ grunt watch # Continuously runs tests every time a file is saved
```

## Linters & Autoformatters ##

### CSS ###
- `stylelint **/*.css` lists all violations of formatting rules
- `stylefmt -r **/*.css -c .stylelintrc` fixes some violations
- `.stylelintrc` defines Clarity's CSS formatting rules

### Typescript ###

- `tslint --fix src/**/*.ts?` fixes Typescript errors
- `tslint.json` defines Clarity's Typescript formatting rules
- Configuration for the Typescript compiler and ATL (Awesome Typescript Loader) is defined in `tsconfig.json`. These are enforced any time the project is compiled (e.g. `npm start`, `npm test`),
