require('zone.js/dist/zone-node');
const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
const AppServerModuleNgFactory = require('../dist-server/main.0f820128f95c4d7066e8.bundle.js').AppServerModuleNgFactory; // bundle name set by npm script build-set-server-main-bundle
const path = require('path');
// const index = require('fs').readFileSync(path.join(__dirname, '..', '/dist-server/index.html'), 'utf8'); // for server side rendering
const index = require('fs').readFileSync(path.join(__dirname, '..', 'dist/index.html'), 'utf8'); // for server to client transition
const express = require('express');

const app = express();
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, '..', 'dist'), {
    index: false
}));

app.use('*', function (req, res, next) {
    // res.sendFile(path.join(__dirname,'../dist/index.html'));
    renderModuleFactory(
        AppServerModuleNgFactory, { document: index, url: req.baseUrl }).then(html => {
            res.send(html);
        });
});

app.listen(port, function () {
    console.log('listening on port: ' + port);
});
