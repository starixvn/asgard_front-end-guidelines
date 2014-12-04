using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ONEbook.FrontEndGuidelines.ViewModels;

namespace ONEbook.FrontEndGuidelines.Controllers
{
    public class HtmlCommonControlsController : Controller
    {
        public HtmlCommonControlsController()
        {
            
        }

        // GET: HtmlCommonControls
        public ActionResult Index(string viewName = "CommonControls")
        {
            ViewBag.LeftMenuViewModel = new LeftMenuViewModel(viewName, "Index", "HtmlCommonControls", GetMenuItems(), false);
            ViewBag.TabName = "commoncontrols";
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
                    new
                    {
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

                    if (i == 2)
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

        private Dictionary<string , Tuple<string, bool>> GetMenuItems()
        {
            var leftMenuItems = new Dictionary<string, Tuple<string, bool>>();

            leftMenuItems.Add("Calendar", Tuple.Create<string, bool>("Calendar", true));
            leftMenuItems.Add("ContextMenu", Tuple.Create<string, bool>("Context Menu", true));
            leftMenuItems.Add("Nav", Tuple.Create<string, bool>("Nav", true));
            leftMenuItems.Add("DropdownList", Tuple.Create<string, bool>("Dropdown List", true));
            leftMenuItems.Add("Tree", Tuple.Create<string, bool>("Tree", true));
            leftMenuItems.Add("Tooltip", Tuple.Create<string, bool>("Tooltip", true));
            leftMenuItems.Add("Textbox", Tuple.Create<string, bool>("Textbox", true));
            leftMenuItems.Add("Checkbox", Tuple.Create<string, bool>("Checkbox", true));
            leftMenuItems.Add("RadioButton", Tuple.Create<string, bool>("Radio Button", true));
            leftMenuItems.Add("Button", Tuple.Create<string, bool>("Button", true));
            leftMenuItems.Add("Chart", Tuple.Create<string, bool>("Chart", false));
            leftMenuItems.Add("CountdownTimer", Tuple.Create<string, bool>("Countdown Timer", false));
            leftMenuItems.Add("Switch", Tuple.Create<string, bool>("Switch", true));
            leftMenuItems.Add("Dialog", Tuple.Create<string, bool>("Dialog", true));
            leftMenuItems.Add("List", Tuple.Create<string, bool>("List", true));
            leftMenuItems.Add("Panel", Tuple.Create<string, bool>("Panel", true));
            leftMenuItems.Add("Tab", Tuple.Create<string, bool>("Tab", true));
            leftMenuItems.Add("Messagebox", Tuple.Create<string, bool>("Message Box", true));
            leftMenuItems.Add("Progress", Tuple.Create<string, bool>("Progress", true));
            leftMenuItems.Add("Breadcrumb", Tuple.Create<string, bool>("Breadcrumb", true));
            leftMenuItems.Add("BlockUI", Tuple.Create<string, bool>("Block UI", true));
            leftMenuItems.Add("Form", Tuple.Create<string, bool>("Form (with validation)", true));

            leftMenuItems = leftMenuItems
                .OrderByDescending(control => control.Value.Item2)
                .ThenBy(control => control.Key)
                .ToDictionary(item => item.Key, item => item.Value);

            return leftMenuItems;
        }
    }
}