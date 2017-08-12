const fs = require('fs');
var glob = require("glob");
const index = fs.readFileSync('./src/index.html', 'utf8');
const path = require('path');

glob('./dist-server/styles.*.bundle.css', { nodir: true }, (err, files) => {    
    const bundleName = files[0].split('/').pop();
    const bundleLink = '<link href="' + bundleName + '" rel="stylesheet">';
    const serverIndex = index.replace('<!--css-bundle-->', bundleLink);
    fs.writeFileSync('./dist-server/index.html', serverIndex);
});


