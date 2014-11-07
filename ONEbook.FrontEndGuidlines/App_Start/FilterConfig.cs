using System.Web;
using System.Web.Mvc;

namespace ONEbook.FrontEndGuidlines
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
