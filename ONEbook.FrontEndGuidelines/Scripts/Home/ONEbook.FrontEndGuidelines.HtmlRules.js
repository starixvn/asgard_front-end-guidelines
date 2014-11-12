/* global Namespace, ONEbook */

'use strict';

$(document).ready(function () {
    var htmlRules = new ONEbook.FrontEndGuidelines.HtmlRules();

    htmlRules.Initialize();
});

Namespace.Register('ONEbook.FrontEndGuidelines.HtmlRules');
ONEbook.FrontEndGuidelines.HtmlRules = function () {
    var $this = this;

    $this.Initialize = function () {
    };
};