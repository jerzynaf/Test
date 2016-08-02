using System.Data.Entity;
using HP.Database.Context;
using HP.Models.Database.Tables;

namespace HP.Database.EntityMappers
{
    public class MemberMapper : IDatabaseEntityMapper
    {
        public void Build(DbModelBuilder modelBuilder)
        {
            MapMember(modelBuilder);
        }


        public static void MapMember(DbModelBuilder modelBuilder)
        {
            var table = modelBuilder.Entity<Member>();
            table.ToTable("Member");
            table.HasKey(o => o.MemberId);
        }
    }
}
