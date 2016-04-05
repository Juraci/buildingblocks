$(function() {
    'use strict';

    $.get('/blocks', appendToList);

    function appendToList(blocks) {
        let list = [];

        for(let i in blocks) {
            list.push($('<li>', { text: blocks[i] }));
        }

        $('.block-list').append(list);
    }
});
