/* global ONEbook */
'use strict';

$(function () {
    var switchButton = new ONEbook.FrontEndGuidelines.Switch();

    switchButton.initialize();
});

ONEbook.FrontEndGuidelines.Switch = function () {
    var me = this;

    me.initialize = function () {
        $("input[type='checkbox']").bootstrapSwitch();
        $("input[type='radio']").bootstrapSwitch();
    };
};