const fs = require('fs');
var glob = require("glob");
const server = fs.readFileSync('./server-src/server.ts', 'utf8');
const path = require('path');

glob('./dist-server/main.*.bundle.js', { nodir: true }, (err, files) => {
    const bundleName = files[0].split('/').pop();
    const updatedServer = server.replace(/main.*.js/, bundleName);
    fs.writeFileSync('./server-src/server.ts', updatedServer);
});


