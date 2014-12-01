using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ONEbook.FrontEndGuidelines.Controllers
{
    public class CSharpRulesController : Controller
    {
        // GET: CSharpRules
        public ActionResult Index()
        {
            ViewBag.TabName = "csharp";
            return View();
        }
    }
}