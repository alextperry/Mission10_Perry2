using BowlingBackEnd.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BowlingBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {

        private BowlerDbContext _bowlerContext;

        public BowlerController(BowlerDbContext bowlerContext)
        {
            _bowlerContext = bowlerContext;
        }

        [HttpGet(Name = "GetBowler")]
        public IEnumerable<Bowler> Get()
        {
            var BowlerList = _bowlerContext.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")  // Filter based on team name
                .ToList();

            return (BowlerList);
        }
    }
}
