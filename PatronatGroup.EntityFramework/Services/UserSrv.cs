using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PatronatGroup.Common.ModelsDTO;
using PatronatGroup.EntityFramework.Models;
using PatronatGroup.Interfaces.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.EntityFramework.Services
{
    
    public class UserSrv : IUserSrv
    {
        private readonly UserManager<tUsers> _userManager;
        private readonly SignInManager<tUsers> _signInManager;

        public UserSrv(UserManager<tUsers> userManager, SignInManager<tUsers> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<UserDTO> Login(UserDTO userDTO)
        {
            
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Email == userDTO.Email);
            if (user == null) return null;

            var result = await _signInManager.CheckPasswordSignInAsync(user, userDTO.Password, false);
            if (result.Succeeded)
            {
                return CreateUserObject(user);
            }
            return null;
        }

        public async Task<UserDTO> Register(UserDTO userDTO)
        {
            if (await _userManager.Users.AnyAsync(x => x.Email == userDTO.Email))
            {
                return null;
            }
            var user = new tUsers
            {
                UserName = userDTO.Email,
                Email = userDTO.Email
            };
            var result = await _userManager.CreateAsync(user, userDTO.Password);
            if (result.Succeeded)
            {
                return CreateUserObject(user);
            }
            return null;
        }
        private UserDTO CreateUserObject(tUsers user)
        {

            return new UserDTO
            {
                Email = user.Email,
            };
        }
    }
}
