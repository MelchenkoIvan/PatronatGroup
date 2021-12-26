using Microsoft.AspNetCore.Identity;
using PatronatGroup.Common.ModelsDTO;
using PatronatGroup.Interfaces.Facades;
using PatronatGroup.Interfaces.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public Task<UserDTO> Login(UserDTO userDTO)
        {
            return _userSrv.Login(userDTO);
        }

        public Task<UserDTO> Register(UserDTO userDTO)
        {
            return _userSrv.Register(userDTO);
        }
    }
}
