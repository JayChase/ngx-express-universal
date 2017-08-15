# NgxExpressUniversal

Angular Cli (1.30) + Angular Material 2 + Angular Universal.

This is a rough guide of how to get up and running with all of the above. The starting point is an Angular-cli generated app with Material 2 added. The aim of this repo is to be a guide to the minimum steps required to get everything up and running so production concerns like error handling, caching and performance etc... are not covered (but hopefully will be in a separate repo with all the best practices later).

### quick links
To get started with [Angular cli](https://github.com/angular/angular-cli),
to install [Angular Material2](https://github.com/angular/material2/blob/master/guides/getting-started.md),
and to install [Angular Universal](https://github.com/angular/angular-cli/wiki/stories-universal-rendering).

## getting started with the sample

```bash
git clone https://github.com/JayChase/ngx-express-universal.git
cd ngx-express-universal
npm install
npm run build-all
npm run server
```

## steps to create the project

### add universal

These steps are just a checklist for the [Angular cli story](https://github.com/angular/angular-cli) so use that for full details.

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

### add express server

* install express @types/node @types/express (--save)
* add server-src/tscfonig.json
* add build-server script to package.json

```json
"build-server": "tsc -p ./server-src/tsconfig.json"
```

### fix missing css bundle (for server side rendering)

To get the Material styles working on the server side add the style bundle to the server index.html.

* install glob and @types/blog (--save-dev)
* add build/addStyleBundle.js
* add build-uni-add-css to package.json

```json
"build-uni-add-css": "node build/addStyleBundle"
```

* add <!--css-bundle--> to src/index.html
* change server/server.ts to use dist-server/index.html

### update server.ts js bundle name on build

* add build/setServerMainBundle.js
* add build-set-server-main-bundle

```json
"build-set-server-main-bundle": "node build/setServerMainBundle"
```

### chosing between server side render or server to client transition

For server side the index in server.ts should be:

```typescript
const index = require('fs').readFileSync('./dist-server/index.html', 'utf8');
```

and for server client transition

```typescript
const index = require('fs').readFileSync('./dist/index.html', 'utf8');
```


