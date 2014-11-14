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
    using System.Linq;
    using System.Collections.Generic;
    using System.Web.Mvc;
    using System;

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
            this.webControls.Add("blockui", "Block UI");
            this.webControls.Add("form", "Form");

            ViewBag.WebControls = this.webControls
                .OrderBy(control => control.Key)
                .ToDictionary(item => item.Key, item => item.Value);
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
        
        /// <summary>
        /// Get Dropdown List Data.
        /// </summary>
        /// <param name="searchText">Search text for searching data.</param>
        /// <param name="pageNumber">Page number for get paging data.</param>
        /// <returns>Sample list data.</returns>
        [HttpGet]
        public JsonResult GetDropdownListData(string searchText, int pageNumber)
        {
            List<string> sampleItems = new List<string>();
            int pageLength = 30;
            int totalItem = 1000;
            int startIndex = pageLength * (pageNumber - 1);
            int endIndex = Math.Min(startIndex + pageLength, totalItem);


            for (int i = startIndex; i < endIndex; i++)
            {
                sampleItems.Add(searchText + i.ToString());
            }

            return Json(
                new
                {
                    Total = totalItem,
                    Items = sampleItems,
                }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetTreeviewList(string nodeId)
        {
            List<object> treeNodes = new List<object>();
            if (string.Compare(nodeId, "#") == 0)
            {
                treeNodes.Add(
                    new { 
                        id = 1,
                        text = "Root node",
                        children = new List<object>
                        {
                            new 
                            {
                                children = true,
                                id = 2,
                                text = "Child node 1"
                            },
                            new 
                            {
                                id = 3,
                                text = "Child node 2"
                            }
                        }
                    });
            }
            else
            {
                var addLength = 5;
                for (int i = 0; i < addLength; i++)
                {
                    var addId = Convert.ToInt32(nodeId) * 10 + i;
                    if (addId > int.MaxValue)
                    {
                        break;
                    }

                    if(i == 2)
                    {
                        treeNodes.Add(new
                            {
                                children = true,
                                id = addId,
                                text = "Child node " + addId.ToString()
                            });
                    }
                    else
                    {
                        treeNodes.Add(new
                        {
                            id = addId,
                            text = "Child node " + addId.ToString()
                        });
                    }
                }
            }

            return Json(treeNodes, JsonRequestBehavior.AllowGet);
        }

                
    }

}