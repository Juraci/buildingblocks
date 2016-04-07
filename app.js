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

    let locations = {
        'Fixed': 'First floor',
        'Movable': 'Second floor',
        'Rotating': 'Penthouse'
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

    // Middleware function
    app.param('name', function(req, res, next) {
        let name = req.params.name;
        let block = `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;

        req.blockName = block;
        next();
    });

    app.get('/blocks/:name', function(req, res) {
        let description = blocks[req.blockName];

        if (!description) {
            res.status(404).json(`No description found for ${req.params.name}`);
        } else {
            res.json(description);
        }
    });

    app.get('/locations/:name', function(req, res) {
        let location = locations[req.blockName];

        if (!location) {
            res.status(404).json(`No location found for ${req.params.name}`);
        } else {
            res.json(location);
        }
    });

    app.listen(port, function() {
        console.log(`Listening on port ${port}`);
    });
})();
