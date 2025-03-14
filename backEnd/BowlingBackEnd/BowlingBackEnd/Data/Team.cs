using System.ComponentModel.DataAnnotations;

namespace BowlingBackEnd.Data
{
    public class Team
    {
        [Key]
        public int TeamID { get; set; }

        [Required]
        public string TeamName { get; set; }
    }
}
