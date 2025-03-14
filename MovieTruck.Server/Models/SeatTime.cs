namespace MovieTruck.Server.Models
{
    public class SeatTime
    {
        public int SeatId { get; set; }
        public Seat Seat { get; set; } = null!;

        public int TimeId { get; set; }
        public Time Time { get; set; } = null!;
    }
}
