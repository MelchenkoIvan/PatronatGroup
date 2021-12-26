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
    public class UserController : Controller
    {
        private readonly IUserFcd _userFcd;
        public UserController(IUserFcd userFcd)
        {
            _userFcd = userFcd;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(UserDTO userDTO)
        {
            var user = await _userFcd.Login(userDTO);
            if(user == null) return Unauthorized();
            return Ok(user);

        }
        [HttpPost("registr")]
        public async Task<ActionResult<UserDTO>> Register(UserDTO userDTO)
        {
            var user = await _userFcd.Register(userDTO);
            if (user == null) return BadRequest("Problem registering user");
            return Ok(user);

        }
    }
}
