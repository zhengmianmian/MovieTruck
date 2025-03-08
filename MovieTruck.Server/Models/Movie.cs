namespace MovieTruck.Server.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateOnly ReleaseDate { get; set; }
        public int RunningTime { get; set; }
        public string Director { get; set; }
        public string Cast {  get; set; }
        public string? LargeCoverUrl { get; set; }
        public string? SmallCoverUrl { get; set; }
        public string? SideCoverUrl { get; set; }
    }
}
