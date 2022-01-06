using Microsoft.AspNetCore.Authorization;
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
        [AllowAnonymous]
        [HttpGet("")]
        public ActionResult GetLawyers()
        {
            var lawyers = _lawyersFcd.GetLawyers();
            return Ok(lawyers);

        }
        [HttpPost("")]
        public ActionResult CreateLawyer(LawyersDTO lawyerDTO)
        {
            _lawyersFcd.CreateLawyer(lawyerDTO);
            return Ok();
        }
        [HttpPut("")]
        public ActionResult UpdateLawyer(LawyersDTO lawyerDTO)
        {
            _lawyersFcd.UpdateLawyer(lawyerDTO);
            return Ok();
        }
        [HttpDelete("")]
        public ActionResult DeleteLawyer(int lawyerId)
        {
            _lawyersFcd.DeleteLawyer(lawyerId);
            return Ok();

        }
        [AllowAnonymous]
        [HttpPost("submit")]
        public ActionResult Submit(ToContactUsDTO toContactUs)
        {
            _lawyersFcd.Submit(toContactUs);
            return Ok();
        }
        [HttpGet("clients")]
        public ActionResult<List<ToContactUsDTO>> GetClients()
        {
            var clients = _lawyersFcd.GetClients();
            return Ok(clients);
        }

    }
}
