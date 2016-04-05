/*jshint esversion: 6 */

(function() {
    'use strict';

    let express = require('express');
    let app = express();

    app.get('/', function(request, response) {
        response.sendFile(__dirname + '/public/index.html');
    });

    app.listen(3000);
})();
