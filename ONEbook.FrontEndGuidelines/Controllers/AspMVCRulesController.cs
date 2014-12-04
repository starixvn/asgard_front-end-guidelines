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
            ViewBag.LeftMenuViewModel = new LeftMenuViewModel(viewName, "Index", "AspMVCRules", GetMenuItems(), true);
            ViewBag.TabName = "aspmvc";
            return this.View(viewName);
        }

        private Dictionary<string, Tuple<string, bool>> GetMenuItems()
        {
            var leftMenuItems = new Dictionary<string, Tuple<string, bool>>();

            leftMenuItems.Add("ModelRecommendations", Tuple.Create<string, bool>("Model Rules", true));
            leftMenuItems.Add("ViewRecommendations", Tuple.Create<string, bool>("View Rules", true));
            leftMenuItems.Add("ControllerRecommendations", Tuple.Create<string, bool>("Controller Rules", true));
            leftMenuItems.Add("RoutingRecommendations", Tuple.Create<string, bool>("Routing Rules", true));
            leftMenuItems.Add("ExtensibilityRecommendations", Tuple.Create<string, bool>("Extensibility Rules", true));
            leftMenuItems.Add("ResourceRecommendations", Tuple.Create<string, bool>("Resource Rules", true));
            leftMenuItems.Add("PerformanceRecommendations", Tuple.Create<string, bool>("Performance Rules", true));

            leftMenuItems = leftMenuItems
                .OrderByDescending(control => control.Value.Item2)
                .ToDictionary(item => item.Key, item => item.Value);

            return leftMenuItems;
        }
    }
}