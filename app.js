/*jshint esversion: 6 */

(function() {
    'use strict';

    let express = require('express');
    let app = express();

    app.use(express.static('public'));

    app.get('/blocks', function(req, res) {
        let blocks = ['Fixed', 'Movavle', 'Rotating'];
        res.json(blocks);
    });

    app.listen(3000);
})();
