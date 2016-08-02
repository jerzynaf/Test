using System;
using System.Data.Entity;
using System.Linq;
using HP.Models.Database.Tables;

namespace HP.Database.Context
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Member> Members { get; set; }

        public DatabaseContext() : base("HOLIDAY-PLANNER")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            var interfaceType = typeof(IDatabaseEntityMapper);

            var tempAssemblies = AppDomain.CurrentDomain
                .GetAssemblies();

            var assemblies = AppDomain.CurrentDomain
                            .GetAssemblies()
                            .Where(o => o.FullName.Contains("HP"))
                            .ToList();

            var builders = assemblies
                .SelectMany(o => o.GetTypes())
                .Where(o => !o.IsAbstract)
                .Where(o => !o.IsInterface)
                .Where(o => interfaceType.IsAssignableFrom(o));

            foreach (var builder in builders)
            {
                var instance = Activator.CreateInstance(builder) as IDatabaseEntityMapper;
                instance.Build(modelBuilder);
            }
        }
    }
}
