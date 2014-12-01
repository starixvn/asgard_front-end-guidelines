using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ONEbook.FrontEndGuidelines.Controllers
{
    public class FrontEndRulesController : Controller
    {
        // GET: FrontEndRules
        public ActionResult CssRules()
        {
            ViewBag.TabName = "cssrules";
            return View();
        }

        public ActionResult HtmlRules()
        {
            ViewBag.TabName = "htmlrules";
            return View();
        }

        public ActionResult JavaScriptRules()
        {
            ViewBag.TabName = "javascriptrules";
            return View();
        }
    }
}