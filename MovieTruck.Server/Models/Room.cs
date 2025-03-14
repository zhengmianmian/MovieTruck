namespace MovieTruck.Server.Models
{
  public class Room
  {
    public int Id { get; set; }
    public required string CinemaLocation { get; set; }
    public required string Name { get; set; }
    public required int Capacity { get; set; }
  }
}