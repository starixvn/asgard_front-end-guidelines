// --------------------------------------------------------------------------
// <copyright file="HomeController.cs" company="Nexcel Solutions Vietnam">
// Copyright (c) Nexcel Solutions Vietnam. All rights reserved.
// </copyright>
// --------------------------------------------------------------------------
// <history>
//   <change who="Jason.Ly" date="2014.11.7">Created</change>
// </history>

namespace ONEbook.FrontEndGuidelines.Controllers
{
    using System.Collections.Generic;
    using System.Web.Mvc;

    /// <summary>
    /// Handles common views.
    /// </summary>
    public class HomeController : Controller
    {
        /// <summary>
        /// The list of web controls.
        /// </summary>
        private Dictionary<string, string> webControls;

        /// <summary>
        /// Initializes a new instance of the <see cref="HomeController"/> class.
        /// </summary>
        public HomeController()
        {
            this.webControls = new Dictionary<string, string>();

            this.webControls.Add("calendar", "Calendar");
            this.webControls.Add("contextmenu", "Context Menu");
            this.webControls.Add("navigation", "Navigation");
            this.webControls.Add("dropdownlist", "Dropdown List");
            this.webControls.Add("tree", "Tree");
            this.webControls.Add("tooltip", "Tooltip");
            this.webControls.Add("textbox", "Textbox");
            this.webControls.Add("checkbox", "Checkbox");
            this.webControls.Add("radiobutton", "Radio Button");
            this.webControls.Add("button", "Button");
            this.webControls.Add("chart", "Chart");
            this.webControls.Add("countdowntimer", "Countdown Timer");
            this.webControls.Add("switch", "Switch");
            this.webControls.Add("dialog", "Dialog");
            this.webControls.Add("list", "List");
            this.webControls.Add("panel", "Panel");
            this.webControls.Add("tab", "Tab");
            this.webControls.Add("messagebox", "Message Box");
            this.webControls.Add("progressbar", "Progress Bar");
            this.webControls.Add("breadcrumb", "Breadcrumb");

            ViewBag.WebControls = this.webControls;
        }

        /// <summary>
        /// Redirects to Index view.
        /// </summary>
        /// <returns>Index view.</returns>
        public ActionResult Index()
        {
            ViewBag.TabName = "introduction";

            return this.View();
        }

        /// <summary>
        /// Redirects to HtmlRules view.
        /// </summary>
        /// <returns>HtmlRules view.</returns>
        public ActionResult HtmlRules()
        {
            ViewBag.TabName = "htmlrules";

            return this.View();
        }

        /// <summary>
        /// Redirects to CssRules view.
        /// </summary>
        /// <returns>CssRules view.</returns>
        public ActionResult CssRules()
        {
            ViewBag.TabName = "cssrules";

            return this.View();
        }

        /// <summary>
        /// Redirects to JavaScriptRules view.
        /// </summary>
        /// <returns>JavaScriptRules view.</returns>
        public ActionResult JavaScriptRules()
        {
            ViewBag.TabName = "javascriptrules";

            return this.View();
        }

        /// <summary>
        /// Redirects to WebControl view.
        /// </summary>
        /// <returns>WebControl view.</returns>
        /// <param name="tabName">The tab name.</param>
        /// <param name="viewName">The view name.</param>
        public ActionResult WebControl(string tabName, string viewName)
        {
            ViewBag.TabName = tabName;
            ViewBag.IsWebControl = true;

            return this.View(viewName);
        }
    }
}