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

        public async Task<SignInResult> Login(UserDTO userDTO)
        {
            SignInResult result = new SignInResult();
            
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Email == userDTO.Email);
            if (user == null) return null;

            result = await _signInManager.CheckPasswordSignInAsync(user, userDTO.Password, false);
            return result;
        }
    }
}
