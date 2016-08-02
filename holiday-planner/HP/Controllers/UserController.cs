using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using HP.Models.Database.Tables;
using HP.Models.ViewModels.MaintainUsers;
using HP.Services.UserServices;

namespace HP.Web.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [Route("all")]
        public IHttpActionResult GetAll()
        {
            var data = _userService.GetAll();
            return Json(data);
        }

        [HttpGet]
        [Route("{userId}")]
        public IHttpActionResult GetUser(Guid userId)
        {
            var data = _userService.GetUser(userId);
            return Json(data);
        }

        [HttpPost]
        [Route("{userId}")]
        public IHttpActionResult PushExpanded([FromBody]MemberViewModel model)
        {
            return Update(model);
        }


        private IHttpActionResult Update(MemberViewModel model)
        {

            if (ModelState.IsValid == false)
            {
                return BadRequest(ModelState);
            }

            var validationErrors = _userService.ValidateUserDetails(model);
            if (validationErrors.Count > 0)
            {
                foreach (var error in validationErrors)
                {
                    ModelState.AddModelError(error.Key, error.Value);
                }
                return BadRequest(ModelState);
            }

            var data = _userService.Update(model.MemberId, model);
            return Json(data);
        }

        /*
           [HttpPut]
           [Route("{userId}/expanded")]
           public IHttpActionResult PutExpanded([FromBody]UserExpanded model)
           {
               return Update(model);
           }

           private IHttpActionResult Update(UserExpanded model)
           {
               var principal = (BpPrincipal)User;

               if (ModelState.IsValid == false)
               {
                   return BadRequest(ModelState);
               }

               var validationErrors = _userService.ValidateUserDetails(model);
               if (validationErrors.Count > 0)
               {
                   foreach (var error in validationErrors)
                   {
                       ModelState.AddModelError(error.Key, error.Value);
                   }
                   return BadRequest(ModelState);
               }

               var data = _userService.UpdateExpandedDetails(principal.User.UserId, model);
               return Json(data);
           }
       */
    }


}