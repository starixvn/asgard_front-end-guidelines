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
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/Libraries/jQuery/jquery-{version}.js"));

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
                    "~/Scripts/Libraries/CodeHighlight/shBrushXml.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/layoutjs").Include(
                    "~/Scripts/Home/ONEbook.FrontEndGuidelines.js",
                    "~/Scripts/Home/ONEbook.FrontEndGuidelines.Layout.js"
                ));


            bundles.Add(new StyleBundle("~/Content/bootstrap").Include(
                      "~/Content/Bootstrap/CSS/bootstrap.css"));

            bundles.Add(new StyleBundle("~/Content/materialdesign").Include(
                      "~/Content/MaterialDesign/CSS/material-wfont.css",
                      "~/Content/MaterialDesign/CSS/ripples.min.css"));

            bundles.Add(new StyleBundle("~/Content/style").Include(
                      "~/Content/style.less"));

            bundles.Add(new StyleBundle("~/Content/highlightcss").Include(
                     "~/Scripts/Libraries/CodeHighlight/Styles/shCore.css",
                     "~/Scripts/Libraries/CodeHighlight/Styles/shCoreEclipse.css"));

        }
    }
}