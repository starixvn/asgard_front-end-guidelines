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
                this.cachedElements.menuHasChildList = $('#guideLineList .has-child');
                this.cachedElements.toggleMenu = $('#toggleMenu');
                this.cachedElements.leftContent = $('#mainContent .left-panel');
                this.cachedElements.rightContent = $('#mainContent .right-panel');
                this.registerEvents();
            },
            registerEvents: function () {
                this.cachedElements.menuHasChildList.click(this.parentClick);
                this.cachedElements.toggleMenu.click(this.toggleMenu);
            },
            parentClick: function () {
                var $this = $(this);
                $this.find('.sub-menu').toggle(200);
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