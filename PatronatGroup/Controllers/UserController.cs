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
    public class UserController : Controller
    {
        private readonly IUserFcd _userFcd;
        public UserController(IUserFcd userFcd)
        {
            _userFcd = userFcd;
        }
        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO)
        {
            var user = await _userFcd.Login(loginDTO);
            if (user == null) return Unauthorized();
            return Ok(user);

        }
        [HttpPost("registr")]
        public async Task<ActionResult<UserDTO>> Register(LoginDTO loginDTO)
        {
            var user = await _userFcd.Register(loginDTO);
            if (user == null) return BadRequest("Problem registering user");
            return Ok(user);

        }
        [HttpGet]
        public async Task<ActionResult<UserDTO>> GetCurrentUser()
        {
            var user = await _userFcd.GetCurrentUser(User);
            return Ok(user);
        }
    }
}
