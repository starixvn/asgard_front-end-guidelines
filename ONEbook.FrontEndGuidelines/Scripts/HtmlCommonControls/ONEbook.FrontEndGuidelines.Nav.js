/* global Namespace, ONEbook */

'use strict';

$(document).ready(function () {
    var nav = new ONEbook.FrontEndGuidelines.Nav();

    nav.Initialize();
});

Namespace.Register('ONEbook.FrontEndGuidelines.Nav');
ONEbook.FrontEndGuidelines.Nav = function () {
    var me = this;

    var toggleRightSide = function () {
        var rightSide = $('#right-side'),
            btnToggle = $('#btn-toggle');

        btnToggle.on('click', function () {
            if (rightSide.hasClass('closed')) {
                rightSide.removeClass('closed');
            } else {
                rightSide.addClass('closed');
            }
        });
    };

    me.Initialize = function () {
        toggleRightSide();
    };
};