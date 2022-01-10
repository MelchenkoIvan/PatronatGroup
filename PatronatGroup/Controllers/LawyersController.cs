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
        [HttpPost("lawyers")]
        public ActionResult<LawyersSR> GetLawyers(LawyersSC sc)
        {
            var lawyers = _lawyersFcd.GetLawyers(sc);
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
        [AllowAnonymous]
        [HttpPost("clients")]
        public ActionResult<ToContactUsSR> GetClients(ToContactUsSC sc)
        {
            var clients = _lawyersFcd.GetClients(sc);
            return Ok(clients);
        }

    }
}
