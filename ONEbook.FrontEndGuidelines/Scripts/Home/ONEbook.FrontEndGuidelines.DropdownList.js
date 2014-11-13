/* global Namespace, ONEbook */

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
            if (!state.id) return state.text; // optgroup
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
        }

        var formatSelection = function (item) {
            return item.text;
        }
        $("#select-lazy-load-item").select2({
            placeholder: "Search for a item",
            minimumInputLength: 1,
            ajax: {
                url: ONEbook.FrontEndGuidelines.rootUrl + 'Home/GetDropdownListData',
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

    me.initialize = function () {
        me.defaultSample();
        me.templateSample();
        me.buildFromListDataSample();
        me.lazyLoadingItemsSample();
    };

};