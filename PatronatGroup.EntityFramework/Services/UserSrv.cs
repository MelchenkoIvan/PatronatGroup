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

        private readonly TokenService _tokenService;

        public UserSrv(UserManager<tUsers> userManager, SignInManager<tUsers> signInManager, TokenService tokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }

        public async Task<UserDTO> Login(LoginDTO loginDTO)
        {
            
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Email == loginDTO.Email);
            if (user == null) return null;

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDTO.Password, false);
            if (result.Succeeded)
            {
                return CreateUserObject(user);
            }
            return null;
        }

        public async Task<UserDTO> Register(LoginDTO loginDTO)
        {
            if (await _userManager.Users.AnyAsync(x => x.Email == loginDTO.Email))
            {
                return null;
            }
            var user = new tUsers
            {
                UserName = loginDTO.Email,
                Email = loginDTO.Email
            };
            var result = await _userManager.CreateAsync(user, loginDTO.Password);
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
                Token = _tokenService.CreateToken(user)
            };
        }
    }
}
