/// <reference path="../Libraries/_references.js" />
/// <reference path="../ONEbook.FrontEndGuidelines.js" />

/*global ONEbook*/

if (ONEbook.FrontEndGuidelines) {
    ONEbook.FrontEndGuidelines.Layout = (function ($) {
        'use strict';
        var me = {
            cachedElements: {
                menuHasChildList: null,
                toggleMenu: null,
                leftContent: null,
                rightContent: null
            },
            init: function () {
                me.cachedElements.menuHasChildList = $('#guideLineList .menu-parent-text');
                me.cachedElements.toggleMenu = $('#toggleMenu');
                me.cachedElements.leftContent = $('#mainContent .left-panel');
                me.cachedElements.rightContent = $('#mainContent .right-panel');
                me.registerEvents();
            },
            registerEvents: function () {
                me.cachedElements.menuHasChildList.click(me.parentClick);
                me.cachedElements.toggleMenu.click(me.toggleMenu);
            },
            parentClick: function () {
                var $this = $(this);
                $this.next().toggle(200);
            },
            toggleMenu: function () {
                var $this = $(this);
                if ($this.hasClass('menu-hide')) {
                    $this.removeClass('menu-hide');
                    me.cachedElements.leftContent.show(100);
                    me.cachedElements.rightContent.removeClass('hide-content');
                }
                else {
                    $this.addClass('menu-hide')
                    me.cachedElements.leftContent.hide(100);
                    me.cachedElements.rightContent.addClass('hide-content');
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