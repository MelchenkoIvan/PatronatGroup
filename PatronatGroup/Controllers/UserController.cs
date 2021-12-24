using Microsoft.AspNetCore.Mvc;
using PatronatGroup.Common.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatronatGroup.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        
        [HttpPost("login")]
        public ActionResult Login(UserDTO userDTO)
        {

            return Unauthorized();
        }
    }
}
