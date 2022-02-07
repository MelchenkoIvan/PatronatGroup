using Microsoft.AspNetCore.Identity;
using PatronatGroup.Common.ModelsDTO;
using PatronatGroup.Interfaces.Facades;
using PatronatGroup.Interfaces.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.Facades
{
    public class UserFcd : IUserFcd
    {
        private readonly IUserSrv _userSrv;
        public UserFcd(IUserSrv userSrv)
        {
            _userSrv = userSrv;
        }

        public async Task<UserDTO> Login(LoginDTO loginDTO)
        {
            return await _userSrv.Login(loginDTO);
        }

        public async Task<UserDTO> Register(LoginDTO loginDTO)
        {
            return await _userSrv.Register(loginDTO);
        }
        public async Task<UserDTO> GetCurrentUser(ClaimsPrincipal User)
        {
            return await _userSrv.GetCurrentUser(User);
        }
    }
}
