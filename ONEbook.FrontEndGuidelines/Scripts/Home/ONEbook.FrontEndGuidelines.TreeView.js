/* global ONEbook */
/*jshint camelcase:false*/
'use strict';

$(function () {
    var treeview = new ONEbook.FrontEndGuidelines.TreeView();

    treeview.initialize();
});

ONEbook.FrontEndGuidelines.TreeView = function () {
    var me = this;

    me.populateTreeFromHtml = function () {
        $('#tree-container-html').jstree({
            core: {
                themes: {
                    icons: false
                }
            }
        });
    };

    me.populateTreeFromArrayData = function () {
        $('#tree-container-array-data').jstree({
            core: {
                data: [
                    {
                        text: 'Root node',
                        state: { opened: true },
                        children: [
                            {
                                text: 'Child node 1',
                                state: { selected: true },
                                icon: 'glyphicon glyphicon-flash'
                            },
                            { text: 'Child node 2', state: { disabled: true } }
                        ]
                    }
                ]
            }
        });
    };

    me.populateTreeWithLazyLoad = function () {
        $('#tree-container-lazy-load').jstree({
            core: {
                data: {
                    url: ONEbook.FrontEndGuidelines.rootUrl + 'HtmlCommonControls/GetTreeviewList',
                    data: function (node) {
                        return { 'nodeId': node.id };
                    }
                }
            }
        });
    };

    me.populateTreeWithCallbackFunction = function () {
        $('#tree-container-call-back-function').jstree({
            core: {
                data: function (node, cb) {
                    if (node.id === '#') {
                        cb([{ text: 'Root', id: '1', children: true }]);
                    }
                    else {
                        cb(['Child']);
                    }
                }
            }
        });
    };

    me.listenEventsAndInteractWithTree = function () {
        $('#tree-container-events-methods').jstree({
            core: {
                data: [
                  { id: 1, text: 'Node 1' },
                  { id: 2, text: 'Node 2' },
                ]
            }
        }).on('changed.jstree', function (e, data) {
            window.console.log('The selected nodes are:');
            window.console.log(data.selected);
        });

        $('#btn-tree-select').on('click', function () {
            var instance = $('#tree-container-events-methods').jstree(true);
            instance.deselect_all();
            instance.select_node('1');
        });
    };

    me.renderWithOthersOptions = function () {
        $('#tree-container-others').jstree({
            core: {
                data: [
                    {
                        text: 'Root node 1',
                        state: { 'opened': true },
                        children: [
                            {
                                text: 'Child node 1',
                                state: { 'selected': true },
                                icon: 'glyphicon glyphicon-flash'
                            },
                            { text: 'Child node 2', 'state': { 'disabled': true } },
                            { text: 'Child node 3' }
                        ]
                    },
                    { text: 'Root node 2', }
                ]
            },
            plugins: ['checkbox', 'contextmenu', 'dnd']
        });
    };

    me.initialize = function () {
        me.populateTreeFromHtml();
        me.populateTreeFromArrayData();
        me.populateTreeWithLazyLoad();
        me.populateTreeWithCallbackFunction();
        me.listenEventsAndInteractWithTree();
        me.renderWithOthersOptions();
    };
};