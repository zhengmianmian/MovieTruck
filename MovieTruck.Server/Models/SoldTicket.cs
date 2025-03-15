namespace MovieTruck.Server.Models
{
  public class SoldTicket
  {
    public int Id { get; set; }
    public int TimeId { get; set; }
    public Time Time { get; set; } = null!;
    public int SeatNO { get; set; }
    public required string UserEmail { get; set; }
  }
}