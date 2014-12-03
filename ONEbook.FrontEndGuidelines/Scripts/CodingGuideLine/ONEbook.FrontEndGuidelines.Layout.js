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
                rightContainer: null,
                rightPanel: null,
                backToTop: null
            },
            init: function () {
                me.cachedElements.leftContent = $('#mainContent .left-panel');
                
                if (me.cachedElements.leftContent.length > 0) {
                    me.cachedElements.toggleMenu = $('#toggleMenu');                    
                    me.cachedElements.rightContent = $('#mainContent .right-panel');
                    me.cachedElements.codeDemoBlocks = $('.docs-section .view-source');
                    me.registerEvents();
                }

                me.cachedElements.rightContainer = $('#right-container');
                me.cachedElements.rightPanel = $('#right-panel');
                me.cachedElements.backToTop = $('#back-top');
                me.scrollTop();
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
            scrollTop: function () {
                
                if (me.cachedElements.rightContainer.height() > ($(window).height() - 80)) {

                    // fade in #back-top
                    me.cachedElements.rightPanel.scroll(function () {
                        if ($(this).scrollTop() > 100) {
                            me.cachedElements.backToTop.fadeIn();
                        } else {
                            me.cachedElements.backToTop.fadeOut();
                        }
                    });
                }

                // scroll body to 0px on click
                me.cachedElements.backToTop.click(function () {
                    me.cachedElements.rightPanel.animate({
                        scrollTop: 0
                    }, 800);
                    return false;
                });
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