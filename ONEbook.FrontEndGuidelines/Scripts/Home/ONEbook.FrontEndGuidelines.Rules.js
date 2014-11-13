/* global Namespace, ONEbook */

'use strict';

$(document).ready(function () {
    var htmlRules = new ONEbook.FrontEndGuidelines.Rules();

    htmlRules.Initialize();
});

Namespace.Register('ONEbook.FrontEndGuidelines.Rules');
ONEbook.FrontEndGuidelines.Rules = function () {
    var me = this;
    var cachedDOM = {
        preCodeSections: null
    };

    var cacheElements = function () {
        cachedDOM.preCodeSections = $('pre');
    };

    var formatCodeSections = function () {
        $.each(cachedDOM.preCodeSections, function (index, pre) {
            var $pre = $(pre);
            var codeLines = $pre.text().split('\n');
            var startIndent = codeLines.length > 0 ? (codeLines[0].length - codeLines[0].trimLeft().length) : 0;
            var formattedCode = codeLines.map(function (item) {
                return item.substr(startIndent);
            }).join('\n');

            $pre.text(formattedCode);
        });
    };

    me.Initialize = function () {
        cacheElements();
        formatCodeSections();
    };
};