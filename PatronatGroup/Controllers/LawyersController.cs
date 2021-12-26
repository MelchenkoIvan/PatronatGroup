using Microsoft.AspNetCore.Mvc;
using PatronatGroup.Common.ModelsDTO;
using PatronatGroup.Interfaces.Facades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatronatGroup.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LawyersController : Controller
    {
        private readonly ILawyersFcd _lawyersFcd;
        public LawyersController(ILawyersFcd lawyersFcd)
        {
            _lawyersFcd = lawyersFcd;
        }
        [HttpGet]
        public async Task<ActionResult<LawyersDTO>> GetLawyers(LawyersDTO lawyers)
        {

            return Ok();

        }
        [HttpPost("")]
        public async Task<ActionResult<LawyersDTO>> CreateLawyer(LawyersDTO lawyers)
        {

            return Ok();

        }
        [HttpPut("")]
        public async Task<ActionResult<UserDTO>> UpdateLawyer(UserDTO userDTO)
        {
            return Ok();

        }
        [HttpDelete("")]
        public async Task<ActionResult<LawyersDTO>> DeleteLawyer(LawyersDTO lawyers)
        {
            return Ok();

        }

        [HttpPost("submit")]
        public async Task<ActionResult<ToContactUsDTO>> Submit(ToContactUsDTO toContactUs)
        {
            return Ok();
        }
        [HttpGet]
        public async Task<ActionResult<ToContactUsDTO>> GetClients(ToContactUsDTO toContactUs)
        {

            return Ok();

        }

    }
}
