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
        btnSetLanguage: null,

        dpkFromDate: null,
        dpkToDate: null,
        btnShowDateRange: null,

        dpkMonth: null,
        btnShowMonth: null,

        dpkFromMonth: null,
        dpkToMonth: null,
        btnShowMonths: null,
        btnShowMonthRange: null
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

        cachedDOM.dpkFromDate = $('#dpkFromDate');
        cachedDOM.dpkToDate = $('#dpkToDate');
        cachedDOM.btnShowDateRange = $('#btnShowDateRange');

        cachedDOM.dpkMonth = $('#dpkMonth');
        cachedDOM.btnShowMonth = $('#btnShowMonth');

        cachedDOM.dpkFromMonth = $('#dpkFromMonth');
        cachedDOM.dpkToMonth = $('#dpkToMonth');
        cachedDOM.btnShowMonths = $('#btnShowMonths');
        cachedDOM.btnShowMonthRange = $('#btnShowMonthRange');
    };

    // Initialize a simple date picker.
    var initializeSampleDate = function () {
        cachedDOM.dpkSamepleDate.datetimepicker({
            defaultDate: new Date(),
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

    // Change the displaying language.
    var changeLanguage = function () {
        var language = cachedDOM.ddlLanguage.val();

        cachedDOM.dpkSamepleDate.data('DateTimePicker').destroy();
        cachedDOM.dpkSamepleDate.datetimepicker({
            defaultDate: new Date(),
            language: language,
            pickTime: false,
            useCurrent: false
        });
    }

    // Initialize pickers to allow to select a date range.
    var initializeDateRange = function () {
        cachedDOM.dpkFromDate.datetimepicker({
            defaultDate: new Date(),
            pickTime: false,
            useCurrent: false
        });

        cachedDOM.dpkToDate.datetimepicker({
            defaultDate: new Date(),
            pickTime: false,
            useCurrent: false
        });

        cachedDOM.dpkFromDate.on('dp.change', function (e) {
            var currentToDateValue = cachedDOM.dpkToDate.data('DateTimePicker').getDate();

            if (currentToDateValue < e.date) {
                cachedDOM.dpkToDate.data('DateTimePicker').setDate(e.date);
            }

            cachedDOM.dpkToDate.data('DateTimePicker').setMinDate(e.date);
        });

        cachedDOM.dpkToDate.on('dp.change', function (e) {
            var currentFromMonthValue = cachedDOM.dpkFromDate.data('DateTimePicker').getDate();

            if (currentFromMonthValue > e.date) {
                cachedDOM.dpkFromDate.data('DateTimePicker').setDate(e.date);
            }

            cachedDOM.dpkFromDate.data('DateTimePicker').setMaxDate(e.date);
        });
    };

    // Show the selected date range.
    var showSelectedDateRange = function () {
        var dateFrom = cachedDOM.dpkFromDate.data('DateTimePicker').getDate();
        var dateTo = cachedDOM.dpkToDate.data('DateTimePicker').getDate();

        alert('Date range: ' + new Date(dateFrom) + ' - ' + new Date(dateTo));
    };

    // Initialize month picker.
    var intializeMonthPicker = function () {
        cachedDOM.dpkMonth.datetimepicker({
            defaultDate: new Date(),
            format: 'MM/YYYY',
            pickTime: false,
            useCurrent: false,
            viewMode: 'months',
            minViewMode: 'months'
        });
    };

    // Show selected month with the format 'MM/YYYY'.
    var showSelectedMonth = function () {
        var selectedMonth = cachedDOM.dpkMonth.data('DateTimePicker').getDate();

        alert('Selected Month: ' + selectedMonth.format('MM/YYYY'));
    }

    // Initialize month pickers.
    var intializeMonthPickers = function () {
        cachedDOM.dpkFromMonth.datetimepicker({
            defaultDate: new Date(),
            format: 'MM/YYYY',
            pickTime: false,
            useCurrent: false,
            viewMode: 'months',
            minViewMode: 'months'
        });

        cachedDOM.dpkToMonth.datetimepicker({
            defaultDate: new Date(),
            format: 'MM/YYYY',
            pickTime: false,
            useCurrent: false,
            viewMode: 'months',
            minViewMode: 'months'
        });

        cachedDOM.dpkFromMonth.on('dp.change', function (e) {
            var currentToMonthValue = cachedDOM.dpkToMonth.data('DateTimePicker').getDate();

            if (currentToMonthValue < e.date) {
                cachedDOM.dpkToMonth.data('DateTimePicker').setDate(e.date);
            }

            cachedDOM.dpkToMonth.data('DateTimePicker').setMinDate(e.date);
        });

        cachedDOM.dpkToMonth.on('dp.change', function (e) {
            var currentFromMonthValue = cachedDOM.dpkFromMonth.data('DateTimePicker').getDate();

            if (currentFromMonthValue > e.date) {
                cachedDOM.dpkFromMonth.data('DateTimePicker').setDate(e.date);
            }

            cachedDOM.dpkFromMonth.data('DateTimePicker').setMaxDate(e.date);
        });
    };

    // Show selected months with the format 'MM/YYYY'.
    var showSelectedMonths = function () {
        var selectedFromMonth = cachedDOM.dpkFromMonth.data('DateTimePicker').getDate();
        var selectedToMonth = cachedDOM.dpkToMonth.data('DateTimePicker').getDate();

        alert('Selected Months: ' + selectedFromMonth.format('MM/YYYY') + ' - ' + selectedToMonth.format('MM/YYYY'));
    }

    // Show selected range: [First date of From Month, Last date of To Month].
    var showSelectedMonthRange = function () {
        var selectedFromMonth = cachedDOM.dpkFromMonth.data('DateTimePicker').getDate();
        var selectedToMonth = cachedDOM.dpkToMonth.data('DateTimePicker').getDate();

        alert('Selected Months: ' + selectedFromMonth.startOf('month').format('MM/DD/YYYY') + ' - ' + selectedToMonth.endOf('month').format('MM/DD/YYYY'));
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
        cachedDOM.btnShowDateRange.on('click', showSelectedDateRange);
        cachedDOM.btnShowMonth.on('click', showSelectedMonth);
        cachedDOM.btnShowMonths.on('click', showSelectedMonths);
        cachedDOM.btnShowMonthRange.on('click', showSelectedMonthRange);
    };

    me.Initialize = function () {
        cacheElements();
        initializeSampleDate();
        initializeDateRange();
        intializeMonthPicker();
        intializeMonthPickers();
        registerEvents();
    };
};