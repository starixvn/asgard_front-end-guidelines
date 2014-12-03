/* global Namespace, ONEbook */

'use strict';

$(document).ready(function () {
    var messageBox = new ONEbook.FrontEndGuidelines.MessageBox();

    messageBox.Initialize();
});

Namespace.Register('ONEbook.FrontEndGuidelines.MessageBox');
ONEbook.FrontEndGuidelines.MessageBox = function () {
    var me = this,
        MsgBox = $.msgbox({
            message: '',
            type: 'err',
            modal: false,
            position: ['top:130', 'center'],
            theme: '',
            zIndex: 9999,
            useAnimation: false
        });
    
    var showDefaultMessage = function () {
        var btnShowDefaultInfoMessage = $('#defaultInfoMessage'),
            btnShowDefaultErrorMessage = $('#defaultErrorMessage'),
            btnShowDefaultConfirmMessage = $('#defaultConfirmMessage');

        btnShowDefaultInfoMessage.on('click', function () {
            showInfoMessage('Information message box');
        });

        btnShowDefaultErrorMessage.on('click', function () {
            showErrorMessage('Error message box');
        });

        btnShowDefaultConfirmMessage.on('click', function () {
            var message = 'Do you want to delete this user?',
                callbackFunc = null;

            showConfirmMessage(message, callbackFunc);
        });
    };

    var showErrorMessage = function (message) {
        var options = {
            sticky: true
        };

        MsgBox.showErr(message, options);
    };

    var showInfoMessage = function (message, callbackFunc) {
        var options = {
            duration: 3000
        };

        callbackFunc = callbackFunc || function () { };
        MsgBox.showInfo(message, options);
        setTimeout(callbackFunc, 3000);
    };

    var showConfirmMessage = function (message, callbackFunc) {
        var options = {
            modal: true,
            closeBtn: false,
            header: true
        };

        callbackFunc = callbackFunc || function () { };
        MsgBox.confirm(message, callbackFunc, options);
    };

    me.Initialize = function () {
        showDefaultMessage();
    };
};