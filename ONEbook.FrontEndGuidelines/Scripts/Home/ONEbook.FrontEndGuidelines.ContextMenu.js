/* global Namespace, ONEbook */

'use strict';

$(document).ready(function () {
    var contextmenu = new ONEbook.FrontEndGuidelines.ContextMenu();

    contextmenu.Initialize();
});

Namespace.Register('ONEbook.FrontEndGuidelines.ContextMenu');
ONEbook.FrontEndGuidelines.ContextMenu = function () {
    var me = this;
    
    var showContextMenu = function () {
        var iconView = $('.icon-view'),
            iconDelete = $('.icon-delete'),
            contentMenu = $('.content-menu');

        iconView.on('click', function () {
            var $this = $(this);

            if ($this.hasClass('active')) {
                $this.removeClass('active');
                $this.siblings('.content-menu').hide();
            } else {
                $this.addClass('active');
                contentMenu.hide();
                $this.siblings('.content-menu').show();                
            }            
        });

        iconDelete.on('click', function () {
            var $this = $(this),
                confirmMsg = confirm('Do you want to delete?');
            if (confirmMsg) {
                $this.parent().parent().remove();
            }
        });
    };

    me.Initialize = function () {
        showContextMenu();
    };
};