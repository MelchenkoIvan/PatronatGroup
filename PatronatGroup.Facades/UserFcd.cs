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

        public Task<UserDTO> Login(LoginDTO loginDTO)
        {
            return _userSrv.Login(loginDTO);
        }

        public Task<UserDTO> Register(LoginDTO loginDTO)
        {
            return _userSrv.Register(loginDTO);
        }
        public Task<UserDTO> GetCurrentUser(ClaimsPrincipal User)
        {
            return _userSrv.GetCurrentUser(User);
        }
    }
}
