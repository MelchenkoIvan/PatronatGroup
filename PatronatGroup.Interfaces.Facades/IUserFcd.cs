using Microsoft.AspNetCore.Identity;
using PatronatGroup.Common.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.Interfaces.Facades
{
    public interface IUserFcd
    {
        Task<UserDTO> Login(LoginDTO loginDTO);
        Task<UserDTO> Register(LoginDTO loginDTO);
        Task<UserDTO> GetCurrentUser(ClaimsPrincipal user);
    }
}
