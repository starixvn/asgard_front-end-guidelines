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
                rightContent: null
            },
            init: function () {
                me.cachedElements.toggleMenu = $('#toggleMenu');
                me.cachedElements.leftContent = $('#mainContent .left-panel');
                me.cachedElements.rightContent = $('#mainContent .right-panel');
                if ($.cookie(me.toggleCookieName) === 'hide') {
                    me.cachedElements.toggleMenu.addClass('menu-hide');
                    me.cachedElements.leftContent.hide(100);
                    me.cachedElements.rightContent.addClass('hide-content');
                }
                me.registerEvents();
            },
            registerEvents: function () {
                me.cachedElements.toggleMenu.click(me.toggleMenu);
            },
            toggleMenu: function () {
                var $this = $(this);
                if ($this.hasClass('menu-hide')) {
                    $this.removeClass('menu-hide');
                    me.cachedElements.leftContent.show(100);
                    me.cachedElements.rightContent.removeClass('hide-content');
                    $.cookie(me.toggleCookieName, 'show', { path: '/' });
                }
                else {
                    $this.addClass('menu-hide');
                    me.cachedElements.leftContent.hide(100);
                    me.cachedElements.rightContent.addClass('hide-content');
                    $.cookie(me.toggleCookieName, 'hide', { path: '/' });
                }
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