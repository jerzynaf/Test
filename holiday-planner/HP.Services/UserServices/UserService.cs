using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using HP.Database.Context;
using HP.Models.Database.Tables;
using HP.Models.ViewModels.MaintainUsers;

namespace HP.Services.UserServices
{
    public class UserService
    {
        private readonly DatabaseContext _databaseContext;

        public UserService(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public List<MemberListItemViewModel> GetAll()
        {
            var data = _databaseContext.Members.OrderBy(o => o.UserName);
            var viewModels = AutoMapper.Mapper.Map<List<MemberListItemViewModel>>(data);
            return viewModels;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userId">id of user, or -1 to create a potential new user</param>
        /// <returns></returns>
        public Member GetUser(Guid userId)
        {
            var userModel = _databaseContext.Members
                .FirstOrDefault(o => o.MemberId.Equals(userId));

            if (userModel == null)
            {
                userModel = CreateNewUser();
            }

            return userModel;
        }

        private Member CreateNewUser()
        {
            return new Member()
            {
                MemberId = Guid.NewGuid(),
                DateCreated = DateTime.UtcNow,
                DateLastLoggedIn = DateTime.UtcNow
            };
        }

        public List<KeyValuePair<string, string>> ValidateUserDetails(MemberViewModel model)
        {
            var errors = new List<KeyValuePair<string, string>>();

            var userData = _databaseContext.Members.FirstOrDefault(o => o.MemberId != model.MemberId && o.UserName.ToLower() == model.UserName.ToLower());

            if (userData != null)
            {
                errors.Add(new KeyValuePair<string, string>("UserName", "User name " + model.UserName + " already exists for another user."));
            }


            return errors;
        }

        public MemberViewModel Update(Guid memberId, MemberViewModel model)
        {

            var createdNewUser = false;
            var userData = _databaseContext.Members
                .FirstOrDefault(o => o.MemberId.Equals(model.MemberId));

            if (userData == null)
            {
                createdNewUser = true;
                userData = CreateNewUser();
                _databaseContext.Members.Add(userData);
            }


            AutoMapper.Mapper.Map(model, userData);

            /*
             * PASSWORD ENCRYPTION
            if (!string.IsNullOrEmpty(user.Password))
            {
                var securityVector = ConfigurationManager.AppSettings["security:vector"];
                var securityKey = ConfigurationManager.AppSettings["security:key"];
                var svc = new EncryptionService(securityVector);
                userData.Password = svc.EncryptString(user.Password, securityKey);
            }
            */

            _databaseContext.SaveChanges();

            /*
            if (createdNewUser)
            {
                audit.Add(new AuditUser(currentUserId, AuditAction.Type.UserCreated, user.UserId));
            }

            if (audit.Any())
            {
                _penguinDbContext.AuditUser.AddRange(audit);
                _penguinDbContext.SaveChanges();
            }

            */
            return model;
        }
    }
}
