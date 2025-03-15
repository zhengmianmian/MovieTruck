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
            
            builder.Entity<SoldTicket>()
                .HasOne(t => t.Time)
                .WithMany()
                .HasForeignKey(t => t.TimeId)
                .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(builder);
        }
     
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<SoldTicket> SoldTickets { get; set; }
        public DbSet<Time> Times { get; set; }
    }
}
