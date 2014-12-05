using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ONEbook.FrontEndGuidelines.Controllers
{
    public class WebDeveloperChecklistController : Controller
    {
        // GET: CodingGuideLine
        public ActionResult Index()
        {
            ViewBag.TabName = "webdeveloperchecklist";
            return View();
        }
    }
}