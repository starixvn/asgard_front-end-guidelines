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
    using System.Web.Mvc;

    /// <summary>
    /// Handles common views.
    /// </summary>
    public class HomeController : Controller
    {
        /// <summary>
        /// Redirects to Index view.
        /// </summary>
        /// <returns>Index view.</returns>
        public ActionResult Index()
        {
            return this.View();
        }
    }
}