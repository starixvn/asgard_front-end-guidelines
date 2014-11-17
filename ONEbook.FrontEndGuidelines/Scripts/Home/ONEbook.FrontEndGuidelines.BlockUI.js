/* global Namespace, ONEbook */

'use strict';

$(document).ready(function () {
    var calendarPage = new ONEbook.FrontEndGuidelines.BlockUI();

    calendarPage.Initialize();
});

Namespace.Register('ONEbook.FrontEndGuidelines.BlockUI');
ONEbook.FrontEndGuidelines.BlockUI = function () {
    var me = this;
    var cachedDOM = {
        btnBlockUI: null
    };

    // Cache DOM elements for later uses.
    var cacheElements = function () {
        cachedDOM.btnBlockUI = $('#btnBlockUI');
    };

    // Show tooltip when hovering on button.
    var initializeTooltips = function () {
        cachedDOM.btnBlockUI.tooltip();
    };

    // Register event handlers.
    var registerEvents = function () {
        cachedDOM.btnBlockUI.on('click', function () {
            $.blockUI({ message: '' });

            setTimeout(function () {
                $.unblockUI();
            }, 5000);
        });
    };

    me.Initialize = function () {
        cacheElements();
        initializeTooltips();
        registerEvents();
    };
};