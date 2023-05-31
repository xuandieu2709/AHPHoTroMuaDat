using AHPHoTroMuaDat.Models;

using Microsoft.EntityFrameworkCore;

namespace AHPHoTroMuaDat.Data
{
    public class MVCDemoDbContext:DbContext
    {
        public MVCDemoDbContext(DbContextOptions<MVCDemoDbContext> options) : base(options) 
        { 
        }
        public DbSet<Criteria> Criteria { get; set; }
        public DbSet<Land> Land { get; set; }
        public DbSet<LandCriteria> LandCriteria { get; set; }

    }
}
