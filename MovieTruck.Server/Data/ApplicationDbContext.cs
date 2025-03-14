using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MovieTruck.Server.Models;

namespace MovieTruck.Server.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            // make user email unique
            builder.Entity<ApplicationUser>()
                .HasIndex(u => u.Email)
                .IsUnique();

            // specify foreign keys
            builder.Entity<Time>()
                .HasOne(t => t.Movie)  // One Time has one Movie
                .WithMany()  // A Movie can have many Times
                .HasForeignKey(t => t.MovieId)
                .OnDelete(DeleteBehavior.Cascade); // Delete Time if Movie is deleted

            builder.Entity<Time>()
                .HasOne(t => t.Room)
                .WithMany() 
                .HasForeignKey(t => t.RoomId)
                .OnDelete(DeleteBehavior.Cascade);
            
            // Configure Many-to-Many relationship
            builder.Entity<SeatTime>()
                .HasKey(st => new { st.SeatId, st.TimeId }); // Composite primary key

            builder.Entity<SeatTime>()
                .HasOne(st => st.Seat)
                .WithMany(s => s.SeatTimes)
                .HasForeignKey(st => st.SeatId)
                .OnDelete(DeleteBehavior.NoAction); // Prevent cascade delete

            builder.Entity<SeatTime>()
                .HasOne(st => st.Time)
                .WithMany(t => t.SeatTimes)
                .HasForeignKey(st => st.TimeId)
                .OnDelete(DeleteBehavior.NoAction); // Prevent cascade delete
            
            base.OnModelCreating(builder);
        }
        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            // Find deleted Time entities
            var deletedTimes = ChangeTracker.Entries<Time>()
                .Where(e => e.State == EntityState.Deleted)
                .Select(e => e.Entity.Id)
                .ToList();

            if (deletedTimes.Any())
            {
                // Delete related SeatTime records manually
                SeatTimes.RemoveRange(SeatTimes.Where(st => deletedTimes.Contains(st.TimeId)));
            }

            return await base.SaveChangesAsync(cancellationToken);
        }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Seat> Seats { get; set; }
        public DbSet<Time> Times { get; set; }
        public DbSet<SeatTime> SeatTimes { get; set; }
    }
}
