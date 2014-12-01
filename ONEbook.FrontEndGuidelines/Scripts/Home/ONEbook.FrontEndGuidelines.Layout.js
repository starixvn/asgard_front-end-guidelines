/// <reference path="../Libraries/_references.js" />
/// <reference path="../ONEbook.FrontEndGuidelines.js" />

/*global ONEbook*/

if (ONEbook.FrontEndGuidelines) {
    ONEbook.FrontEndGuidelines.Layout = (function ($) {
        'use strict';
        var me = {
            toggleCookieName: 'ONEbook.FrontEndGuidelines.Layout.toggleCookieName',
            cachedElements: {
                toggleMenu: null,
                leftContent: null,
                rightContent: null,
                codeDemoBlocks: null,
                commonControls: null,
                ASPMVC: null
            },
            init: function () {
                me.cachedElements.leftContent = $('#mainContent .left-panel');
                
                if (me.cachedElements.leftContent.length > 0) {
                    me.cachedElements.toggleMenu = $('#toggleMenu');
                    me.cachedElements.commonControls = $('#commonControls');
                    me.cachedElements.ASPMVC = $('#aspmvc');
                    me.cachedElements.rightContent = $('#mainContent .right-panel');
                    me.cachedElements.codeDemoBlocks = $('.docs-section .view-source');
                    me.registerEvents();
                }
            },
            registerEvents: function () {
                me.cachedElements.toggleMenu.on('click', me.toggleMenu);
                //me.cachedElements.commonControls.on('click', me.markShowLeftPanel);
                //me.cachedElements.ASPMVC.on('click', me.unMarkShowLeftPanel);
                me.cachedElements.codeDemoBlocks.on('click', me.toogleCodeDemo);
            },
            toogleCodeDemo: function () {
                $(this).parent().find('.code-section').slideToggle(200);
            },
            toggleMenu: function () {
                var $this = $(this);
                if ($this.hasClass('menu-show')) {
                    $this.removeClass('menu-show');
                    me.cachedElements.rightContent.removeClass('show-left');
                    me.cachedElements.leftContent.hide(100);
                } 
                else {
                    $this.addClass('menu-show');
                    me.cachedElements.leftContent.show();
                    me.cachedElements.rightContent.addClass('show-left');
                }
            },
            markShowLeftPanel: function () {
                $.cookie(me.toggleCookieName, 'show', { path: '/' });
            },
            unMarkShowLeftPanel: function () {
                $.cookie(me.toggleCookieName, 'hide', { path: '/' });
            }
        };

        return me;
    }) (jQuery);

    $(function () {
        'use strict';

        ONEbook.FrontEndGuidelines.Layout.init();
    });
}
else {
    alert('Missed ONEbook.FrontEndGuidelines.js file');
}