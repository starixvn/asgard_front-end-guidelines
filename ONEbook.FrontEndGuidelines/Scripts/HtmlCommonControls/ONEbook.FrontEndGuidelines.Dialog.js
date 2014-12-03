/// <reference path="../Libraries/Dialog/BootstrapDialog/bootstrap-dialog.js" />
/* global ONEbook, BootstrapDialog */
'use strict';

$(function () {
    var dialog = new ONEbook.FrontEndGuidelines.Dialog();

    dialog.initialize();
});

ONEbook.FrontEndGuidelines.Dialog = function () {
    var me = this;

    me.openDialogDefault = function () {
        $('#btn-dialog-default').on('click', function () {
            BootstrapDialog.show({
                message: 'Hi!'
            });
        });
    };

    me.openDialogForModifying = function () {
        $('#btn-dialog-modify').on('click', function () {
            BootstrapDialog.show({
                title: 'Default Title',
                message: 'Click buttons below.',
                buttons: [{
                    label: 'Modify 1',
                    hotkey: 65, // Keycode of keyup event of key 'A' is 65.
                    cssClass: 'btn-primary',
                    action: function (dialog) {
                        dialog.setTitle('Title 1');
                        dialog.setMessage('Message 1');
                    }
                }, {
                    label: 'Modify 2',
                    hotkey: 66,
                    cssClass: 'btn-success',
                    action: function (dialog) {
                        dialog.setTitle('Title 2');
                        dialog.setMessage('Message 2');
                    }
                }, {
                    icon: 'glyphicon glyphicon-ban-circle',
                    label: 'Disable myself',
                    cssClass: 'btn-warning',
                    action: function () {
                        var $button = this; // 'this' here is a jQuery object that wrapping the <button> DOM element.
                        $button.disable();
                    }
                }, {
                    label: 'Close',
                    cssClass: 'btn-danger',
                    action: function (dialogItself) {
                        dialogItself.close();
                    }
                }]
            });
        });
    };

    me.controlDialogInstances = function () {
        $('#btn-dialog-instances').on('click', function () {

            // Using init options
            var dialogInstance1 = new BootstrapDialog({
                title: 'Dialog instance 1',
                message: 'Hi Apple!'
            });

            // Construct by using setters
            var dialogInstance2 = new BootstrapDialog();
            dialogInstance2.setTitle('Dialog instance 2');
            dialogInstance2.setMessage('Hi Orange!');
            dialogInstance2.setType(BootstrapDialog.TYPE_SUCCESS);

            // Using chain callings
            var dialogInstance3 = new BootstrapDialog()
                .setTitle('Dialog instance 3')
                .setMessage('Hi Everybody!')
                .setType(BootstrapDialog.TYPE_INFO);

            dialogInstance1.open();
            dialogInstance2.open();
            dialogInstance3.open();

        });
    };

    me.workWithDialogEvents = function () {
        var $textAndPic = $('<div class="dialog-events-sample"></div>');
        $textAndPic.append('Who\'s this?');

        $('#btn-dialog-events').on('click', function () {
            BootstrapDialog.show({
                message: $textAndPic,
                onshow: function (dialogRef) {
                   //alert('Dialog is popping up, its message is ' + dialogRef.getMessage());
                },
                onshown: function (dialogRef) {
                    alert('Dialog is popped up.');
                },
                onhide: function (dialogRef) {
                   // alert('Dialog is popping down, its message is ' + dialogRef.getMessage());
                },
                onhidden: function (dialogRef) {
                    //alert('Dialog is popped down.');
                }
            });
        });
    };

    me.initialize = function () {
        me.openDialogDefault();
        me.openDialogForModifying();
        me.controlDialogInstances();
        me.workWithDialogEvents();
    };
};