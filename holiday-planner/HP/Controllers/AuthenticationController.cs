using System.Web.Http;
using HP.Models.Api.Authentication;
using HP.Services.AuthenticationServices;

namespace HP.Web.Controllers
{
    [RoutePrefix("api/authentication")]
    public class AuthenticationController : ApiController
    {
        private readonly MemberAuthenticationService _memberAuthenticationService;

        public AuthenticationController(MemberAuthenticationService memberAuthenticationService)
        {
            _memberAuthenticationService = memberAuthenticationService;
        }

        [HttpPost]
        [AllowAnonymous]
        public IHttpActionResult Post([FromBody] AuthenticationRequest request)
        {
            AuthenticationResponse response;

            var data = _memberAuthenticationService.AuthenticateMember(request.UserName, request.Password);

            if (data == null)
            {
                //response = new AuthenticationResponse() { Authenticated = false };
                //DELETE THE LINE BELOW!
                response = new AuthenticationResponse() { Authenticated = true };
            }
            else
            {
                response = new AuthenticationResponse()
                {
                    Authenticated = true,
                    MemberId = data.MemberId,
                    UserName = data.UserName
                };
            }

            return Json(response);
        }
    }
}