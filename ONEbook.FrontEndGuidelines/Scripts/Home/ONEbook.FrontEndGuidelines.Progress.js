/* global Namespace, ONEbook */

'use strict';

$(document).ready(function () {
    var nav = new ONEbook.FrontEndGuidelines.Progress();

    nav.Initialize();
});

Namespace.Register('ONEbook.FrontEndGuidelines.Progress');
ONEbook.FrontEndGuidelines.Progress = function () {
    var me = this;

    me.Initialize = function () {
        $('#circular').circliful();
    };
};