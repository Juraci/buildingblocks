/*jshint esversion: 6 */

(function() {
    'use strict';

    const port = 3000;

    let express = require('express');
    let logger = require('./logger.js');
    let app = express();

    let blocks = {
        'Fixed': 'Fastened securely in position',
        'Movable': 'Capable of being moved',
        'Rotating': 'Moving in a circle around its center'
    };

    app.use(logger);
    app.use(express.static('public'));

    function objectToArray(obj) {
        let arrayOfProperties = [];

        for(let property in obj) {
            arrayOfProperties.push(property);
        }

        return arrayOfProperties;
    }

    app.get('/blocks', function(req, res) {
        if (req.query.limit >= 0) {
            res.json(objectToArray(blocks).slice(0, req.query.limit));
        } else {
            res.json(objectToArray(blocks));
        }
    });

    app.get('/blocks/:name', function(req, res) {
        let name = req.params.name;
        let block = `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;
        let description = blocks[block];

        if (!description) {
            response.status(404).json(`No description found for ${req.params.name}`);
        } else {
            res.json(description);
        }
    });

    app.listen(port, function() {
        console.log(`Listening on port ${port}`);
    });
})();
