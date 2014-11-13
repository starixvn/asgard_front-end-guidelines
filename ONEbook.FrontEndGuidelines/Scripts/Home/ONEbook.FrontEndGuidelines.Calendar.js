/* global Namespace, ONEbook */

'use strict';

$(document).ready(function () {
	var calendarPage = new ONEbook.FrontEndGuidelines.Calendar();

	calendarPage.Initialize();
});

Namespace.Register('ONEbook.FrontEndGuidelines.Calendar');
ONEbook.FrontEndGuidelines.Calendar = function () {
    var me = this;
    var cachedDOM = {
    };

    var cacheElements = function () {
    };

    me.Initialize = function () {
        cacheElements();
    };
};