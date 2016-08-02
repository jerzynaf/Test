using System.Data.Entity;

namespace HP.Database.Context
{
    public interface IDatabaseEntityMapper
    {
        void Build(DbModelBuilder modelBuilder);
    }
}
