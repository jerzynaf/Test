using System;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;
using Ninject;
using Ninject.Web.Common;
using System.Web.Script.Serialization;
using HP.Database.Context;


namespace HP.Web
{
    public class WebApiApplication :  NinjectHttpApplication
    {

        protected override IKernel CreateKernel()
        {
            var kernel = new StandardKernel();

            var assemblyList = AppDomain.CurrentDomain.GetAssemblies();
            var appList = assemblyList.Where(o => o.FullName.StartsWith("CVL")).ToList();

            foreach (var assembly in appList)
            {
                kernel.Load(assembly);
            }

            //kernel.Bind<IOccupationService>().To<OccupationService>();
            //kernel.Bind<IListService>().To<ListService>();
            //kernel.Bind<IPenguinDbUpdateContext>().To<PenguinDbUpdateContext>();

            GlobalConfiguration.Configuration.DependencyResolver = new Ninject.WebApi.DependencyResolver.NinjectDependencyResolver(kernel);
            return kernel;
        }
        protected override void OnApplicationStarted()
        {
            base.OnApplicationStarted();

            System.Data.Entity.Database.SetInitializer<DatabaseContext>(null);

            Services.Bootstrap.Boot();

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        protected void Application_PostAuthenticateRequest(Object sender, EventArgs e)
        {
            HttpCookie authCookie = Request.Cookies[FormsAuthentication.FormsCookieName];

            if (authCookie == null) return;
            var authTicket = FormsAuthentication.Decrypt(authCookie.Value);

            if (authTicket == null)
            {
                return;
            }

            var serializer = new JavaScriptSerializer();
            //var cookie = serializer.Deserialize<UserCookie>(authTicket.UserData);
            //var principal = new CvlPrincipal(cookie);

            //HttpContext.Current.User = principal;
        }

        protected void Application_Error(object sender, EventArgs e)
        {
            var error = Server.GetLastError();
            Server.ClearError();
            Response.ContentType = "text/plain";
            Response.Write(error ?? (object)"unknown");
            Response.End();
        }

        //protected void Application_Start()
        //{
        //    AreaRegistration.RegisterAllAreas();
        //    GlobalConfiguration.Configure(WebApiConfig.Register);
        //    FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
        //    RouteConfig.RegisterRoutes(RouteTable.Routes);
        //    BundleConfig.RegisterBundles(BundleTable.Bundles);


        //}
    }
}
