/* global ONEbook */

'use strict';

$(function () {
    var treeview = new ONEbook.FrontEndGuidelines.TreeView();

    treeview.initialize();
});

ONEbook.FrontEndGuidelines.TreeView = function () {
    var me = this;

    me.populateTreeFromHtml = function () {
        $('#tree-container-html').jstree();
    };

    me.populateTreeFromArrayData = function () {
        $('#tree-container-array-data').jstree({
            'core': {
                'data': [
                    {
                        "text": "Root node",
                        "state": { "opened": true },
                        "children": [
                            {
                                "text": "Child node 1",
                                "state": { "selected": true },
                                "icon": "glyphicon glyphicon-flash"
                            },
                            { "text": "Child node 2", "state": { "disabled": true } }
                        ]
                    }
                ]
            }
        });
    };

    me.populateTreeWithLazyLoad = function () {
        $('#tree-container-lazy-load').jstree({
            'core': {
                'data': {
                    "url": ONEbook.FrontEndGuidelines.rootUrl + 'Home/GetTreeviewList',
                    "data": function (node) {
                        return { "nodeId": node.id };
                    }
                }
            }
        });
    };

    me.populateTreeWithCallbackFunction = function () {
        $('#tree-container-call-back-function').jstree({
            'core': {
                'data': function (node, cb) {
                    if (node.id === "#") {
                        cb([{ "text": "Root", "id": "1", "children": true }]);
                    }
                    else {
                        cb(["Child"]);
                    }
                }
            }
        });
    };

    me.initialize = function () {
        me.populateTreeFromHtml();
        me.populateTreeFromArrayData();
        me.populateTreeWithLazyLoad();
        me.populateTreeWithCallbackFunction();
    };
};