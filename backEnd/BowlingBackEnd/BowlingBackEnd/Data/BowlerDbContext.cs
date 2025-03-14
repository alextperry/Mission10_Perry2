using Microsoft.EntityFrameworkCore;

namespace BowlingBackEnd.Data
{
    public class BowlerDbContext : DbContext
    {
        public BowlerDbContext(DbContextOptions<BowlerDbContext> options) : base(options) 
        {
            
        }

        public DbSet<Bowler> Bowlers { get; set; }
        public DbSet<Team> Teams { get; set; }

    }
}
