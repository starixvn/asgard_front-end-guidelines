using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ONEbook.FrontEndGuidelines.ViewModels;

namespace ONEbook.FrontEndGuidelines.Controllers
{
    public class CSharpRulesController : Controller
    {

        // GET: CSharpRules
        public ActionResult Index(string viewName = "General")
        {
            ViewBag.LeftMenuViewModel = new LeftMenuViewModel(viewName, "Index", "CSharpRules", GetMenuItems(), true);
            ViewBag.TabName = "csharp";
            return this.View(viewName);
        }

        private Dictionary<string, Tuple<string, bool>> GetMenuItems()
        {
            var leftMenuItems = new Dictionary<string, Tuple<string, bool>>();

            leftMenuItems.Add("General", Tuple.Create<string, bool>("General", true));
            leftMenuItems.Add("ClassDesignGuidelines", Tuple.Create<string, bool>("Class Design Guidelines", true));
            leftMenuItems.Add("MemberDesignGuidelines", Tuple.Create<string, bool>("Member Design Guidelines", true));
            leftMenuItems.Add("MiscellaneousDesignGuidelines", Tuple.Create<string, bool>("Miscellaneous Design Guidelines", true));
            leftMenuItems.Add("MaintainabilityGuidelines", Tuple.Create<string, bool>("Maintainability Guidelines", true));
            leftMenuItems.Add("NamingGuidelines", Tuple.Create<string, bool>("Naming Guidelines", true));
            leftMenuItems.Add("PerformanceGuidelines", Tuple.Create<string, bool>("Performance Guidelines", true));
            leftMenuItems.Add("FrameworkGuidelines", Tuple.Create<string, bool>("Framework Guidelines", true));
            leftMenuItems.Add("DocumentationGuidelines", Tuple.Create<string, bool>("Documentation Guidelines", true));
            leftMenuItems.Add("LayoutGuidelines", Tuple.Create<string, bool>("Layout Guidelines", true));
            leftMenuItems.Add("DataAccess", Tuple.Create<string, bool>("Data Access", true));

            leftMenuItems = leftMenuItems
                .OrderByDescending(control => control.Value.Item2)
                .ToDictionary(item => item.Key, item => item.Value);

            return leftMenuItems;
        }
    }
}