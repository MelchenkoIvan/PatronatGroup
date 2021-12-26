using Microsoft.AspNetCore.Identity;
using PatronatGroup.Common.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.Interfaces.Infrastructure
{
    public interface IUserSrv
    {
        Task<UserDTO> Login(UserDTO userDTO);
        Task<UserDTO> Register(UserDTO userDTO);
    }
}
