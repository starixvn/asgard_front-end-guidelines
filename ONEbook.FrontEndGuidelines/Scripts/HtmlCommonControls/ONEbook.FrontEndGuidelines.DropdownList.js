/* global ONEbook */

'use strict';

$(document).ready(function () {
    var dropdownList = new ONEbook.FrontEndGuidelines.DropdownList();

    dropdownList.initialize();
});

ONEbook.FrontEndGuidelines.DropdownList = function () {
    var me = this;

    me.defaultSample = function () {
        $('#default-select').select2();
    };

    me.templateSample = function () {
        var format = function (state) {
            if (!state.id) {
                return state.text; // optgroup
            }

            return "<img class='flag' src='"
                + ONEbook.FrontEndGuidelines.rootUrl
                + "Content/DropdownList/Select2/Images/"
                + state.id.toLowerCase() + ".png'/>"
                + state.text;
        };

        $("#select-item-template").select2({
            formatResult: format,
            formatSelection: format,
            escapeMarkup: function (m) { return m; },
            width: "300"
        });
    };

    me.buildFromListDataSample = function () {
        var listItem = {
            results: [
                {
                    id: 11, text: "First Group", children: [
                      { id: 1, text: "First Item" },
                      { id: 2, text: "Second Disabled Item", disabled: true },
                      { id: 3, text: "Third Item" }
                    ],
                },
                {
                    id: 22, text: "Second Group",
                    children: [
                      { id: 4, text: "Fourth Disabled Item", disabled: true },
                      { id: 5, text: "Fifth Item" },
                      { id: 6, text: "Sixth Item" }
                    ]
                }
            ]
        };

        $('#select-list-item').select2({
            query: function (query) {
                query.callback(listItem);
            },
            width: "300"
        }).select2("data", { id: 3, text: "Third Item" });
    };

    me.lazyLoadingItemsSample = function () {
        var formatResult = function (item) {
            var markup = '<div>' + item.text + '</div>';

            return markup;
        };

        var formatSelection = function (item) {
            return item.text;
        };
        $("#select-lazy-load-item").select2({
            placeholder: "Search for a item",
            minimumInputLength: 1,
            ajax: {
                url: ONEbook.FrontEndGuidelines.rootUrl + 'HtmlCommonControls/GetDropdownListData',
                dataType: 'json',
                quietMillis: 250,
                data: function (term, page) { // page is the one-based page number tracked by Select2
                    return {
                        searchText: term, //search term
                        pageNumber: page // page number
                    };
                },
                results: function (data, page) {
                    var more = (page * 30) < data.Total; // whether or not there are more results available

                    // notice we return the value of more so Select2 knows if more results can be loaded
                    var convertedItems = [];

                    for (var i = 0; i < data.Items.length; i++) {
                        convertedItems.push({
                            id: data.Items[i],
                            text: data.Items[i]
                        });
                    }

                    return { results: convertedItems, more: more };
                }
            },
            formatResult: formatResult, // omitted for brevity, see the source of this page
            formatSelection: formatSelection, // omitted for brevity, see the source of this page
            dropdownCssClass: "bigdrop", // apply css that makes the dropdown taller
            escapeMarkup: function (m) { return m; }, // we do not want to escape markup since we are displaying html in results
            width: "300"
        });
    };

    me.multipleSelectionSample = function () {
        $('#select-multiple-items-selection').select2({
            width: 300
        });
    };

    me.multipleSelectTreeView = function () {
        var myGroupData =
            [{
                id: "Food",
                value: "Food",
                text: "Food",
                checked: true,
                enable: true,
                cssClass: "demo-class",
                items: [
                    {
                        id: "Meet",
                        value: "Meet",
                        text: "Meet",
                        checked: true,
                        enable: true,
                        items: [{
                            id: "Beef",
                            value: "Beef",
                            text: "Beef",
                            checked: true,
                            enable: true,
                        }, {
                            id: "Pork",
                            value: "Pork",
                            text: "Pork",
                            checked: true,
                            enable: true,
                        }, {
                            id: "Chicken",
                            value: "Chicken",
                            text: "Chicken",
                            checked: true,
                            enable: true,
                        }]
                    },
                    {
                        id: "Fruit",
                        value: "Fruit",
                        text: "Fruit",
                        checked: true,
                        enable: true,
                        items: [{
                            id: "Red",
                            value: "Red",
                            text: "Red",
                            checked: true,
                            enable: true,
                            items: [{
                                id: "Cherry",
                                value: "Cherry",
                                text: "Cherry",
                                checked: true,
                                enable: false,
                            }, {
                                id: "Strawberry",
                                value: "Strawberry",
                                text: "Strawberry",
                                checked: true,
                                enable: true,
                            }, {
                                id: "Pineapple",
                                value: "Pineapple",
                                text: "Pineapple",
                                checked: true,
                                enable: true,
                            }]
                        }, {
                            id: "Yellow",
                            value: "Yellow",
                            text: "Yellow",
                            checked: true,
                            enable: true,
                            show: false,
                            items: [{
                                id: "Banana",
                                value: "Banana",
                                text: "Banana",
                                checked: true,
                                enable: true,
                            }, {
                                id: "Pear",
                                value: "Pear",
                                text: "Pear",
                                checked: true,
                                enable: true,
                            }]
                        }]
                    },
                    {
                        id: "Vegetable",
                        value: "Vegetable",
                        text: "Vegetable",
                        checked: true,
                        enable: true,
                        items: [{
                            id: "Cucumber",
                            value: "Cucumber",
                            text: "Cucumber",
                            checked: true,
                            enable: true,
                        }, {
                            id: "Spinach",
                            value: "Spinach",
                            text: "Spinach",
                            checked: true,
                            enable: true,
                        }, {
                            id: "Onion",
                            value: "Onion",
                            text: "Onion",
                            checked: true,
                            enable: true,
                        }]
                    }
                ]
            }, {
                id: "Beverage",
                value: "Beverage",
                text: "Beverage",
                checked: true,
                enable: true,
                items: [{
                    id: "Beer",
                    value: "Beer",
                    text: "Beer",
                    checked: true,
                    enable: true
                }, {
                    id: "Wine",
                    value: "Wine",
                    text: "Wine",
                    checked: true,
                    enable: true
                }]
            }];

        $("#select-multiple-treeview").fanexMultiSelect({
            listData: myGroupData,
            position: 'top',
            maxHeight: 470,
        });
    };

    me.selectMethodsAndEvents = function () {
        $("#select-methods-events-single").select2({ width: 300 })
            .on("select2-selecting", function () { alert("change");})
            .on("select2-open", function () { alert("open"); })
            .on("select2-close", function () { alert("close"); });
        $("#btn-get-single").on('click', function () { alert("Selected value is: " + $("#select-methods-events-single").select2("val")); });
        $("#btn-set-single").on('click', function () { $("#select-methods-events-single").select2("val", "CA"); });
        $("#btn-get-clear").on('click', function () { $("#select-methods-events-single").select2("val", ""); });
        $("#btn-get-single-2").on('click', function ()
        {
            var data = $("#select-methods-events-single").select2("data"); delete data.element;
            alert("Selected data is: " + JSON.stringify(data));
        });
        $("#btn-set-single-2").on('click', function () { $("#select-methods-events-single").select2("data", { id: "CA", text: "California" }); });
        $("#btn-open").on('click', function () { $("#select-methods-events-single").select2("open"); });
        $("#btn-close").on('click', function () { $("#select-methods-events-single").select2("close"); });
        $("#select-methods-events-multiple").select2({ placeholder: "Select a state", width: 300 });
        $("#btn-get-multiple").on('click', function () { alert("Selected value is: " + $("#select-methods-events-multiple").select2("val")); });
        $("#btn-set-multiple").on('click', function () { $("#select-methods-events-multiple").select2("val", ["CA", "CO"]); });
        $("#btn-get-multiple-2").on('click', function () { alert("Selected value is: " + JSON.stringify($("#select-methods-events-multiple").select2("data"))); });
        $("#btn-set-multiple-2").on('click', function () {
            $("#select-methods-events-multiple").select2("data",
                [
                    { id: "CA", text: "California" },
                    { id: "CO", text: "Colorado" }
                ]);
        });
        $("#btn-clear-multiple").on('click', function () { $("#select-methods-events-multiple").select2("val", ""); });
        $("#btn-open-multiple").on('click', function () { $("#select-methods-events-multiple").select2("open"); });
        $("#btn-close-multiple").on('click', function () { $("#select-methods-events-multiple").select2("close"); });
    };

    me.initialize = function () {
        me.defaultSample();
        me.templateSample();
        me.buildFromListDataSample();
        me.lazyLoadingItemsSample();
        me.multipleSelectionSample();
        me.multipleSelectTreeView();
        me.selectMethodsAndEvents();
    };

};