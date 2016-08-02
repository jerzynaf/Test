using System.Linq;
using HP.Database.Context;
using HP.Models.Database.Tables;

namespace HP.Services.AuthenticationServices
{
    public class MemberAuthenticationService
    {
        private readonly DatabaseContext _databaseContext;

        public MemberAuthenticationService(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public Member AuthenticateMember(string username,string password)
        {
            var data = _databaseContext.Members.FirstOrDefault(o => o.UserName.Equals(username) && o.Password.Equals(password));
            return data;
        }

    }
}
