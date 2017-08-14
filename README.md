# NgxExpressUniversal

Angular Cli (1.30) + Angular Material 2 + Angular Universal.

This is a very rough guide of how to get up and running with all of the above. The starting point is an Angulat-cli generated app with Material added. The aim of this repo is to be a guide to the minimum syep required to get everything up and running. So productio concerns like error handling, caching and performance etc.. are not covered (but hopefully will be in a separetd repo with all the best practices at a later date).

### quick links
To get started with [Angular cli](https://github.com/angular/angular-cli),
To install [Angular Material2](https://github.com/angular/material2/blob/master/guides/getting-started.md)
To install [Angular Universal](https://github.com/angular/angular-cli/wiki/stories-universal-rendering)

## Steps to add universal

These steps are just a checklist for the [Angular cli story](https://github.com/angular/angular-cli) so use that for more details.

####intall platform server

* install @angular/platform-server (--save-dev)
* add src/tsconfig.server.json
* add src/main.server.ts
* add src/app.server.module.ts
* change src/app.module.ts

```typescript
BrowserModule.withServerTransition({
      appId: 'cli-uni'
    });
```

* add server app to .angular-cli.json
* exclude dist-server in .gitignore 

## Add express server

* npm install --save express
* npm install @types/node @types/express --save
* add server-src/tscfonig.json
* add build-server script to package.json

```json
"build-server": "tsc -p ./server-src/tsconfig.json"
```

##fix missing css buncle

To get the Material styles working on the server side add the style bundle to the server index.html.

* install glob and @types/blog (--save-dev)
* add build/addStyleBundle.js
* add build-uni-add-css to package.json

```json
"build-uni-add-css": "node build/addStyleBundle",
```

* add <!--css-bundle--> to src/index.html
* change server/server.ts to use dist-server/index.html

## update server.ts js bundle name on build

* add build/setServerMainBundle.js
* add build-set-server-main-bundle

```json
"build-set-server-main-bundle": "node build/setServerMainBundle"
```

