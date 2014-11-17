; (function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD is used - Register as an anonymous module.
        define(['jquery', 'moment'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('moment'));
    }
    else {
        // Neither AMD or CommonJS used. Use global variables.
        if (!jQuery) {
            throw new Error('jQuery is required to be loaded first');
        }

        if (!moment) {
            throw new Error('moment.js is required to be loaded first');
        }

        factory(root.jQuery, moment);
    }
}(this, function ($, moment) {
    'use strict';

    var dateRangeTypesId = 0;

    var DateRangeSelector = function (element, options) {
        var dateRangeSelector = this;

        var $element = $(element);

        var pickers = {
            fromDatepicker: null,
            toDatepicker: null
        };

        var validateOptions = function () {
            if (!dateRangeSelector.options.dateFromElement || !dateRangeSelector.options.dateToElement) {
                throw 'Please intialize the datepicker(s) first!';
            }

            pickers.fromDatepicker = dateRangeSelector.options.dateFromElement.data('DateTimePicker');
            pickers.toDatepicker = dateRangeSelector.options.dateToElement.data('DateTimePicker');

            if (!pickers.fromDatepicker || !pickers.toDatepicker) {
                throw 'Please intialize the datepicker(s) first!';
            }
        };

        var setDatePickersValues = function (dateFrom, dateTo) {
            validateOptions();
            dateFrom = pickers.fromDatepicker.options.minDate > dateFrom ? pickers.fromDatepicker.options.minDate : dateFrom;
            dateFrom = pickers.fromDatepicker.options.maxDate < dateFrom ? pickers.fromDatepicker.options.maxDate : dateFrom;
            dateTo = pickers.toDatepicker.options.minDate > dateTo ? pickers.toDatepicker.options.minDate : dateTo;
            dateTo = pickers.toDatepicker.options.maxDate < dateTo ? pickers.toDatepicker.options.maxDate : dateTo;
            pickers.fromDatepicker.setValue(dateFrom);
            pickers.toDatepicker.setValue(dateTo);
        };

        var getDefaultDateTypeMapper = function () {
            var handleYesterdayDateRange = function () {
                var currentDate = moment();
                var yesterday = moment().subtract(1, 'days');

                setDatePickersValues(yesterday, yesterday);
            };

            var handleCurrentWeekDateRange = function () {
                var currentDate = moment();
                var startOfWeek = moment().startOf('week');

                setDatePickersValues(startOfWeek, currentDate);
            };

            var handleLastWeekDateRange = function () {
                var startOfLastWeek = moment().subtract(1, 'weeks').startOf('week');
                var endOfLastWeek = moment().subtract(1, 'weeks').endOf('week');

                setDatePickersValues(startOfLastWeek, endOfLastWeek);
            };

            var handleLastMonthDateRange = function () {
                var startOfLastMonth = moment().subtract(1, 'months').startOf('months');
                var endOfLastMonth = moment().subtract(1, 'months').endOf('months');

                setDatePickersValues(startOfLastMonth, endOfLastMonth);
            };

            var handleSinceLastMonthDateRange = function () {
                var currentDate = moment();
                var startOfLastMonth = moment().subtract(1, 'months').startOf('months');

                setDatePickersValues(startOfLastMonth, currentDate);
            };

            return {
                yesterday: handleYesterdayDateRange,
                currentWeek: handleCurrentWeekDateRange,
                lastWeek: handleLastWeekDateRange,
                lastMonth: handleLastMonthDateRange,
                sinceLastMonth: handleSinceLastMonthDateRange,
                specificDate: function () { }
            }
        };

        var registerEventHandlers = function () {
            $element.on('change', function () {
                var selectedValue = $element.val();

                dateRangeSelector.options.dateTypeMapper.apply()[selectedValue].apply();
            });

            dateRangeSelector.options.dateFromElement.on('dp.change', function () {
                $element.val('specificDate');
            });

            dateRangeSelector.options.dateToElement.on('dp.change', function () {
                $element.val('specificDate');
            });
        };

        var defaults = {
            language: 'en',
            defaultValue: 'yesterday',
            dateFromElement: null,
            dateToElement: null,
            dateTypeMapper: getDefaultDateTypeMapper
        };

        var initialize = function () {
            dateRangeSelector.options = $.extend({}, defaults, options);
            validateOptions();
            dateRangeSelector.changeLanguage(dateRangeSelector.options.language);
            registerEventHandlers();

            $element.val(dateRangeSelector.options.defaultValue).change();
        };

        dateRangeSelector.changeLanguage = function (language) {
            var lang = $.fn.daterangeselector.language[language];

            $element.empty();

            for (var property in lang) {
                $element.append($('<option/>', { value: property, text: lang[property] }));
            }
        };

        initialize();
    };

    $.fn.daterangeselector = function (options) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('DateRangeSelector');

            if (!data) {
                $this.data('DateRangeSelector', new DateRangeSelector(this, options));
            }
        });
    };

    $.fn.daterangeselector.language = {
        'en': {
            yesterday: 'Yesterday',
            currentWeek: 'Current week',
            lastWeek: 'Last week',
            lastMonth: 'Last month',
            sinceLastMonth: 'Since last month',
            specificDate: 'Specific date'
        }
    };
}));