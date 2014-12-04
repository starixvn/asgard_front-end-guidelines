using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ONEbook.FrontEndGuidelines.ViewModels
{
    public class LeftMenuViewModel
    {
        public LeftMenuViewModel(
            string activeMenu, 
            string actionName,
            string controllerName, 
            Dictionary<string, Tuple<string, bool>> menuItems, bool moreInfo)
        {
            ActiveMenu = activeMenu;
            ActionName = ActionName;
            ControllerName = controllerName;
            MenuItems = menuItems;
            MoreInfo = moreInfo;
        }

        public string ActiveMenu { get; set; }

        public string ControllerName { get; set; }

        public string ActionName { get; set; }

        public Dictionary<string, Tuple<string, bool>> MenuItems { get; set; }

        public bool MoreInfo { get; set; }
    }
}