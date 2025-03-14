namespace MovieTruck.Server.Models
{
  public class Seat
  {
    public int Id { get; set; }
    public int SeatNO { get; set; }
    public bool Occupied { get; set; }
    public string? UserEmail { get; set; }
    public List<SeatTime> SeatTimes { get; set; } = new();
  }
}