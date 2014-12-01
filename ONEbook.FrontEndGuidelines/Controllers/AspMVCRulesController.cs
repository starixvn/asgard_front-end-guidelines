using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ONEbook.FrontEndGuidelines.ViewModels;

namespace ONEbook.FrontEndGuidelines.Controllers
{
    public class AspMVCRulesController : Controller
    {

        // GET: AspMVCRules
        public ActionResult Index(string viewName = "ModelRecommendations")
        {
            ViewBag.LeftMenuViewModel = new LeftMenuViewModel(viewName, "Index", "AspMVCRules", GetMenuItems());
            ViewBag.TabName = "aspmvc";
            return this.View(viewName);
        }

        private Dictionary<string, Tuple<string, bool>> GetMenuItems()
        {
            var leftMenuItems = new Dictionary<string, Tuple<string, bool>>();

            leftMenuItems.Add("ModelRecommendations", Tuple.Create<string, bool>("Model Recommendations", true));
            leftMenuItems.Add("ViewRecommendations", Tuple.Create<string, bool>("View Recommendations", true));
            leftMenuItems.Add("ControllerRecommendations", Tuple.Create<string, bool>("Controller Recommendations", true));
            leftMenuItems.Add("RoutingRecommendations", Tuple.Create<string, bool>("Routing Recommendations", true));
            leftMenuItems.Add("ExtensibilityRecommendations", Tuple.Create<string, bool>("Extensibility Recommendations", true));
            leftMenuItems.Add("ResourceRecommendations", Tuple.Create<string, bool>("Resource Recommendations", true));
            leftMenuItems.Add("PerformanceRecommendations", Tuple.Create<string, bool>("Performance Recommendations", true));

            leftMenuItems = leftMenuItems
                .OrderByDescending(control => control.Value.Item2)
                .ToDictionary(item => item.Key, item => item.Value);

            return leftMenuItems;
        }
    }
}