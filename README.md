# NgxExpressUniversal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Steps so far to add universal

npm install @angular/platform-server --save-dev

add src/tsconfig.server.json

add src/main.server.ts

add src/app.server.module.ts

change src/app.module.ts

BrowserModule.withServerTransition({
      appId: 'cli-uni'
    })

add server app to .angular-cli.json

.gitignore exclude dist-server 

npm install express --save

add server/server.js

## Add express server

npm install --save express
npm install @types/node @types/express --save

server-src/tscfonig

package.json add script "build-server": "tsc -p ./server-src/tsconfig.json",

##fix missing css buncle

 npm i glob @types/glob --save-dev

build/addStyleBundle.js

package.json add script  "build-uni-add-css": "node build/addStyleBundle",

add <!--css-bundle--> to src/index.html

change server/server.ts to use dist-server/index.html


