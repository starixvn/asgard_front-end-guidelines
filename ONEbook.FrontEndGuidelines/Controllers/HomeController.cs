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
        private Dictionary<string, Tuple<string, bool>> webControls;

        /// <summary>
        /// Initializes a new instance of the <see cref="HomeController"/> class.
        /// </summary>
        public HomeController()
        {
            this.webControls = new Dictionary<string, Tuple<string, bool>>();

            this.webControls.Add("calendar", Tuple.Create<string, bool>("Calendar", true));
            this.webControls.Add("contextmenu", Tuple.Create<string, bool>("Context Menu", false));
            this.webControls.Add("navigation", Tuple.Create<string, bool>("Navigation", false));
            this.webControls.Add("dropdownlist", Tuple.Create<string, bool>("Dropdown List", true));
            this.webControls.Add("tree", Tuple.Create<string, bool>("Tree", true));
            this.webControls.Add("tooltip", Tuple.Create<string, bool>("Tooltip", true));
            this.webControls.Add("textbox", Tuple.Create<string, bool>("Textbox", true));
            this.webControls.Add("checkbox", Tuple.Create<string, bool>("Checkbox", true));
            this.webControls.Add("radiobutton", Tuple.Create<string, bool>("Radio Button", true));
            this.webControls.Add("button", Tuple.Create<string, bool>("Button", true));
            this.webControls.Add("chart", Tuple.Create<string, bool>("Chart", false));
            this.webControls.Add("countdowntimer", Tuple.Create<string, bool>("Countdown Timer", false));
            this.webControls.Add("switch", Tuple.Create<string, bool>("Switch", true));
            this.webControls.Add("dialog", Tuple.Create<string, bool>("Dialog", true));
            this.webControls.Add("list", Tuple.Create<string, bool>("List", false));
            this.webControls.Add("panel", Tuple.Create<string, bool>("Panel", false));
            this.webControls.Add("tab", Tuple.Create<string, bool>("Tab", true));
            this.webControls.Add("messagebox", Tuple.Create<string, bool>("Message Box", false));
            this.webControls.Add("progress", Tuple.Create<string, bool>("Progress", false));
            this.webControls.Add("breadcrumb", Tuple.Create<string, bool>("Breadcrumb", false));
            this.webControls.Add("blockui", Tuple.Create<string, bool>("Block UI", true));
            this.webControls.Add("form", Tuple.Create<string, bool>("Form", true));

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