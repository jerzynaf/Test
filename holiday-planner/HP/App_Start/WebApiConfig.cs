using System.Net.Http.Headers;
using System.Web.Http;

namespace HP.Web
{
    
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Formatters.XmlFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/xml"));
            GlobalConfiguration.Configuration.Formatters.Add(new System.Net.Http.Formatting.XmlMediaTypeFormatter());
        }
    }
}
