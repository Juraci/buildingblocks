/*jshint esversion: 6 */

(function() {
    'use strict';

    const port = 3000;

    let express = require('express');
    let logger = require('./logger.js');
    let app = express();

    app.use(logger);
    app.use(express.static('public'));

    app.get('/blocks', function(req, res) {
        let blocks = ['Fixed', 'Movable', 'Rotating'];
        res.json(blocks);
    });

    app.listen(port, function() {
        console.log(`Listening on port ${port}`);
    });
})();
