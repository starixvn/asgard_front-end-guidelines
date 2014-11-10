/// <reference path="../Libraries/_references.js" />
/// <reference path="../ONEbook.FrontEndGuidelines.js" />

/*global ONEbook*/

if (ONEbook.FrontEndGuidelines) {
    ONEbook.FrontEndGuidelines.Layout = (function ($) {
        'use strict';
        
        return {
            cachedElements: {
                hasChildList: null
            },
            init: function () {
                this.cachedElements.hasChildList = $('#guideLineList .has-child');
                this.registerEvents();
            },
            registerEvents: function () {
                this.cachedElements.hasChildList.click(this.parentClick);
            },
            parentClick: function () {
                var $me = $(this);
                $me.find('.sub-menu').toggle(200);
            }
        };
    }) (jQuery);

    $(function () {
        'use strict';

        ONEbook.FrontEndGuidelines.Layout.init();
    });
}
else {
    alert('Missed ONEbook.FrontEndGuidelines.js file');
}