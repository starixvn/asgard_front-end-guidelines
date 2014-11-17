/* global Namespace, ONEbook */

'use strict';

$(document).ready(function () {
    var tooltipPage = new ONEbook.FrontEndGuidelines.Tooltip();

    tooltipPage.Initialize();
});

Namespace.Register('ONEbook.FrontEndGuidelines.Tooltip');
ONEbook.FrontEndGuidelines.Tooltip = function () {
    var me = this;

    // Initialize the page.
    me.Initialize = function () {
        $('[data-toggle="tooltip"]').tooltip();
    };
};