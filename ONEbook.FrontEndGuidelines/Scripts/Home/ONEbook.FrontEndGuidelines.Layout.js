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
                commonControls: null
            },
            init: function () {
                me.cachedElements.toggleMenu = $('#toggleMenu');
                me.cachedElements.commonControls = $('#commonControls');
                me.cachedElements.leftContent = $('#mainContent .left-panel');
                me.cachedElements.rightContent = $('#mainContent .right-panel');
                //me.cachedElements.rightContent.scrollTop(0);
                me.cachedElements.codeDemoBlocks = $('.docs-section .view-source');
                
                if ($.cookie(me.toggleCookieName) === 'show') {
                    me.cachedElements.toggleMenu.addClass('menu-show');
                    me.cachedElements.leftContent.show();
                    me.cachedElements.rightContent.addClass('show-left');
                }

                me.registerEvents();
            },
            registerEvents: function () {
                me.cachedElements.toggleMenu.on('click', me.toggleMenu);
                me.cachedElements.commonControls.on('click', me.markShowLeftPanel);
                me.cachedElements.codeDemoBlocks.on('click', me.toogleCodeDemo);
            },
            toogleCodeDemo: function () {
                $(this).parent().find('.code-section').slideToggle(200);
            },
            toggleMenu: function () {
                var $this = $(this);
                if ($this.hasClass('menu-show')) {
                    $this.removeClass('menu-show');
                    me.cachedElements.leftContent.hide(350);
                    me.cachedElements.rightContent.removeClass('show-left');
                    $.cookie(me.toggleCookieName, 'hide', { path: '/' });
                } 
                else {
                    $this.addClass('menu-show');
                    me.cachedElements.leftContent.show();
                    me.cachedElements.rightContent.addClass('show-left');
                    $.cookie(me.toggleCookieName, 'show', { path: '/' });
                }
            },
            markShowLeftPanel: function () {
                $.cookie(me.toggleCookieName, 'show', { path: '/' });
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