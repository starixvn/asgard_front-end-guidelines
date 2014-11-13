/* global Namespace, ONEbook */

'use strict';

$(document).ready(function () {
    var calendarPage = new ONEbook.FrontEndGuidelines.Calendar();

    calendarPage.Initialize();
});

Namespace.Register('ONEbook.FrontEndGuidelines.Calendar');
ONEbook.FrontEndGuidelines.Calendar = function () {
    var me = this;
    var cachedDOM = {
        dpkSamepleDate: null,
        txtMinDate: null,
        btnSetMinDate: null,
        txtMaxDate: null,
        btnSetMaxDate: null,
        btnShowSampleDate: null,
        btnHideSampleDate: null,
        btnEnableSampleDate: null,
        btnDisableSampleDate: null,
        ddlLanguage: null,
        btnSetLanguage: null
    };

    // Cache DOM elements for later uses.
    var cacheElements = function () {
        cachedDOM.dpkSamepleDate = $('#dpkSamepleDate');
        cachedDOM.txtMinDate = $('#txtMinDate');
        cachedDOM.btnSetMinDate = $('#btnSetMinDate');
        cachedDOM.txtMaxDate = $('#txtMaxDate');
        cachedDOM.btnSetMaxDate = $('#btnSetMaxDate');
        cachedDOM.btnShowSampleDate = $('#btnShowSampleDate');
        cachedDOM.btnHideSampleDate = $('#btnHideSampleDate');
        cachedDOM.btnEnableSampleDate = $('#btnEnableSampleDate');
        cachedDOM.btnDisableSampleDate = $('#btnDisableSampleDate');
        cachedDOM.ddlLanguage = $('#ddlLanguage');
        cachedDOM.btnSetLanguage = $('#btnSetLanguage');
    };

    // Initialize a simple date picker.
    var initializeSampleDate = function () {
        cachedDOM.dpkSamepleDate.datetimepicker({
            pickTime: false,
            useCurrent: false
        });
    };

    // Set minimum date that the datepicker can allow the user to select.
    var setMinDate = function () {
        var minDate = cachedDOM.txtMinDate.val();

        cachedDOM.dpkSamepleDate.data('DateTimePicker').setMinDate(minDate);
    };

    // Set maximum date that the datepicker can allow the user to select.
    var setMaxDate = function () {
        var maxDate = cachedDOM.txtMaxDate.val();

        cachedDOM.dpkSamepleDate.data('DateTimePicker').setMaxDate(maxDate);
    };

    // Show the datepicker programmatically.
    var showDatePicker = function () {
        cachedDOM.dpkSamepleDate.data('DateTimePicker').show();
    };

    // Hide the datepicker programmatically.
    var hideDatePicker = function () {
        cachedDOM.dpkSamepleDate.data('DateTimePicker').hide();
    };

    // Enable the datepicker.
    var enableDatePicker = function () {
        cachedDOM.dpkSamepleDate.data('DateTimePicker').enable();
    };

    // Disable the datepicker.
    var disableDatePicker = function () {
        cachedDOM.dpkSamepleDate.data('DateTimePicker').disable();
    };

    var changeLanguage = function () {
        var language = cachedDOM.ddlLanguage.val();

        cachedDOM.dpkSamepleDate.data('DateTimePicker').destroy();
        cachedDOM.dpkSamepleDate.datetimepicker({
            language: language,
            pickTime: false,
            useCurrent: false
        });
    }

    // Register all handlers to events of controls.
    var registerEvents = function () {
        cachedDOM.btnSetMinDate.on('click', setMinDate);
        cachedDOM.btnSetMaxDate.on('click', setMaxDate);
        cachedDOM.btnShowSampleDate.on('click', showDatePicker);
        cachedDOM.btnHideSampleDate.on('click', hideDatePicker);
        cachedDOM.btnEnableSampleDate.on('click', enableDatePicker);
        cachedDOM.btnDisableSampleDate.on('click', disableDatePicker);
        cachedDOM.btnSetLanguage.on('click', changeLanguage);
    };

    me.Initialize = function () {
        cacheElements();
        initializeSampleDate();
        registerEvents();
    };
};