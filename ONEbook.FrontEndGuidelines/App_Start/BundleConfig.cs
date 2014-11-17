// --------------------------------------------------------------------------
// <copyright file="BundleConfig.cs" company="Nexcel Solutions Vietnam">
// Copyright (c) Nexcel Solutions Vietnam. All rights reserved.
// </copyright>
// --------------------------------------------------------------------------
// <history>
//   <change who="Jason.Ly" date="2014.11.7">Created</change>
// </history>

namespace ONEbook.FrontEndGuidelines
{
    using System.Web.Optimization;

    /// <summary>
    /// Bundle Configuration.
    /// </summary>
    public class BundleConfig
    {
        /// <summary>
        /// Registers the bundles.
        /// </summary>
        /// <param name="bundles">The bundle collections.</param>
        public static void RegisterBundles(BundleCollection bundles)
        {
            RegisterCommonBundles(bundles);
            RegisterSitesBundles(bundles);
        }

        /// <summary>
        /// Registers common bundles.
        /// </summary>
        /// <param name="bundles">The bundle collections.</param>
        private static void RegisterCommonBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/Libraries/jQuery/jquery-{version}.js",
                        "~/Scripts/Libraries/jQuery/jquery.cookie.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/Libraries/jQuery/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/Libraries/Modernizr/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                        "~/Scripts/Libraries/Bootstrap/bootstrap.js",
                        "~/Scripts/Libraries/Respond/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/materialdesign").Include(
                        "~/Scripts/Libraries/MaterialDesign/material.js",
                        "~/Scripts/Libraries/MaterialDesign/ripples.js",
                        "~/Scripts/Libraries/NoUISlider/jquery.nouislider.js"));

            bundles.Add(new ScriptBundle("~/bundles/highlightjs").Include(
                        "~/Scripts/Libraries/CodeHighlight/shCore.js",
                        "~/Scripts/Libraries/CodeHighlight/shBrushCss.js",
                        "~/Scripts/Libraries/CodeHighlight/shBrushJScript.js",
                        "~/Scripts/Libraries/CodeHighlight/shBrushXml.js",
                        "~/Scripts/Libraries/CodeHighlight/shBrushCSharp.js"));

            bundles.Add(new ScriptBundle("~/bundles/layoutjs").Include(
                        "~/Scripts/Libraries/Namespace/namespace.js",
                        "~/Scripts/Home/ONEbook.FrontEndGuidelines.js",
                        "~/Scripts/Home/ONEbook.FrontEndGuidelines.Layout.js"));

            bundles.Add(new StyleBundle("~/Content/bootstrap").Include(
                        "~/Content/Bootstrap/CSS/bootstrap.css"));

            bundles.Add(new StyleBundle("~/Content/materialdesign").Include(
                        "~/Content/MaterialDesign/CSS/material-wfont.css",
                        "~/Content/MaterialDesign/CSS/ripples.min.css",
                        "~/Content/CustomizedControls/material-design.less"));

            bundles.Add(new StyleBundle("~/Content/style").Include(
                        "~/Content/style.less",
                        "~/Content/CustomizedControls/tab.less"));

            bundles.Add(new StyleBundle("~/Content/highlightcss").Include(
                        "~/Content/CodeHighlight/shCore.css",
                        "~/Content/CodeHighlight/shCoreDefault.css"));
        }

        /// <summary>
        /// Registers sites' bundles.
        /// </summary>
        /// <param name="bundles">The bundle collections.</param>
        private static void RegisterSitesBundles(BundleCollection bundles)
        {
            // Bundle for Rules sites.
            bundles.Add(new ScriptBundle("~/bundles/rules/js").Include(
                "~/Scripts/Home/ONEbook.FrontEndGuidelines.Rules.js"));

            // Bundle for Dropdown List
            bundles.Add(new ScriptBundle("~/bundles/controls/js/dropdownlist").Include(
                "~/Scripts/Libraries/DropdownList/Select2/select2.js",
                "~/Scripts/Libraries/DropdownList/FanexMultipleSelect/fanex.multiSelect.js",
                "~/Scripts/Home/ONEbook.FrontEndGuidelines.DropdownList.js"));

            bundles.Add(new StyleBundle("~/bundles/controls/css/dropdownlist").Include(
                "~/Content/DropdownList/Select2/select2.css",
                "~/Content/DropdownList/Select2/select2-bootstrap.css",
                "~/Content/DropdownList/FanexMultipleSelect/fanex.multiSelect.css",
                "~/Content/CustomizedControls/dropdownlist.less"));

            // Bundles for Datepicker.
            bundles.Add(new ScriptBundle("~/bundles/controls/js/calendar").Include(
                "~/Scripts/Libraries/Moment/moment-with-locales.min.js",
                "~/Scripts/Libraries/Datepicker/bootstrap-datetimepicker.min.js",
                "~/Scripts/Home/ONEbook.FrontEndGuidelines.Calendar.js",
                "~/Scripts/CustomizedLibraries/daterangeselector.js"));

            bundles.Add(new StyleBundle("~/bundles/controls/css/calendar").Include(
                "~/Content/Datepicker/bootstrap-datetimepicker.min.css"));

            // Bundles for Treeview.
            bundles.Add(new ScriptBundle("~/bundles/controls/js/treeview").Include(
               "~/Scripts/Libraries/TreeView/JSTree/jstree.js",
               "~/Scripts/Home/ONEbook.FrontEndGuidelines.TreeView.js"));

            bundles.Add(new StyleBundle("~/bundles/controls/css/treeview").Include(
                "~/Content/TreeView/JSTree/default/style.css"));

            // Bundles for switch button
            bundles.Add(new ScriptBundle("~/bundles/controls/js/switch").Include(
                "~/Scripts/Libraries/Switch/bootstrap-switch.js",
                "~/Scripts/Home/ONEbook.FrontEndGuidelines.Switch.js"));

            bundles.Add(new StyleBundle("~/bundles/controls/css/switch").Include(
                "~/Content/Switch/bootstrap-switch.css"));

            // Bundles for dialog
            bundles.Add(new ScriptBundle("~/bundles/controls/js/dialog").Include(
                "~/Scripts/Libraries/Dialog/BootstrapDialog/bootstrap-dialog.js",
                "~/Scripts/Home/ONEbook.FrontEndGuidelines.Dialog.js"));

            bundles.Add(new StyleBundle("~/bundles/controls/css/dialog").Include(
                "~/Content/Dialog/BootstrapDialog/css/bootstrap-dialog.css",
                "~/Content/CustomizedControls/dialog.less"));

            // Bundles for block UI.
            bundles.Add(new ScriptBundle("~/bundles/controls/js/blockui").Include(
                "~/Scripts/Libraries/jQuery/jquery.blockUI.js",
                "~/Scripts/Home/ONEbook.FrontEndGuidelines.BlockUI.js"));

            bundles.Add(new StyleBundle("~/bundles/controls/css/blockui").Include(
                "~/Content/CustomizedControls/blockui.less"));

            // Bundle for Checkbox.
            bundles.Add(new StyleBundle("~/bundles/controls/css/checkbox").Include(
                "~/Content/CustomizedControls/checkbox.less"));
        }
    }
}