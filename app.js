/*jshint esversion: 6 */

(function() {
    'use strict';

    const port = 3000;

    let express = require('express');
    let app = express();

    app.use(express.static('public'));

    app.get('/blocks', function(req, res) {
        let blocks = ['Fixed', 'Movable', 'Rotating'];
        res.json(blocks);
    });

    app.listen(port, function() {
        console.log(`Listening on port ${port}`)
    });
})();
