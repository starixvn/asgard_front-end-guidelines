/* global Namespace, ONEbook */

'use strict';

$(document).ready(function () {
    var aspmvc = new ONEbook.FrontEndGuidelines.ASPMVC();

    aspmvc.Initialize();
});

Namespace.Register('ONEbook.FrontEndGuidelines.ASPMVC');
ONEbook.FrontEndGuidelines.ASPMVC = function () {
    var me = this;

    var toggleRightSide = function () {
        var rightSideNav = $('#sidenav-right'),
            docContent = $('#doc-content'),
            btnToggle = $('#toggle-sidenav-right');

        btnToggle.on('click', function () {
            if (!btnToggle.hasClass('active')) {
                docContent.addClass('col-sm-9 col-md-10').removeClass('col-sm-12');
                rightSideNav.fadeIn('fast');
                btnToggle.addClass('mdi-action-tab').removeClass('mdi-action-tab-unselected').addClass('active');
            } else {
                docContent.addClass('col-sm-12').removeClass('col-sm-9 col-md-10');
                rightSideNav.hide('fast');
                btnToggle.addClass('mdi-action-tab-unselected').removeClass('mdi-action-tab').removeClass('active');
            }
            
        });
    };

    me.Initialize = function () {
        toggleRightSide();
    };
};