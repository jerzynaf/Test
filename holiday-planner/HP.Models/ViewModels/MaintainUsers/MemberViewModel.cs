using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HP.Models.ViewModels.MaintainUsers
{
    public class MemberViewModel
    {
        public Guid MemberId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Forename { get; set; }
        public string Surname { get; set; }
        public int? RoleId { get; set; }
        public bool? RoleEnabled { get; set; }
        public string Email { get; set; }
    }
}
