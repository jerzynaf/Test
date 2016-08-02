using System;

namespace HP.Models.Api.Authentication
{
    public class AuthenticationResponse
    {
        public bool Authenticated { get; set; }
        public Guid MemberId { get; set; }
        public string UserName { get; set; }
    }
}
