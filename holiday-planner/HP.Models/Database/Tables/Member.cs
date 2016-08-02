using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HP.Models.Database.Tables
{

    public class Member
    {
        public Guid MemberId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateLastLoggedIn { get; set; }
        public string LocationName { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}
