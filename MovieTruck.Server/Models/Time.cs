namespace MovieTruck.Server.Models
{
  public class Time
  {
    public int Id { get; set; }
    public int MovieId { get; set; }
    public Movie Movie { get; set; } = null!;
    public int RoomId { get; set; }
    public Room Room { get; set; } = null!;
    public DateTime ShowTime { get; set; }
    public List<SeatTime> SeatTimes { get; set; } = new();
  }
}