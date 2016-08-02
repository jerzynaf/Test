using AutoMapper;
using HP.Models.Database.Tables;
using HP.Models.ViewModels.MaintainUsers;

namespace HP.Services
{
    public class Bootstrap
    {
        public static void Boot()
        {
            SetupMappers();
        }

        public static void SetupMappers()
        {
            Mapper.AssertConfigurationIsValid();
            Mapper.CreateMap<Member, MemberListItemViewModel>();
            Mapper.CreateMap<MemberViewModel, Member>();

            //Mapper.CreateMap<ExternalLead, Lead>();
            //Mapper.CreateMap<UserExpanded, User>()
            //    .ForMember(o => o.Password, opt => opt.Ignore());
        }
    }
}
