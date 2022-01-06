using Microsoft.AspNetCore.Identity;
using PatronatGroup.EntityFramework.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.EntityFramework.Seed
{
    public static class IdentityDataInitializer
    {
        public static void SeedData(UserManager<tUsers> userManager)
        {
            SeedUsers(userManager);
        }

        public static void SeedUsers(UserManager<tUsers> userManager)
        {
            if (userManager.FindByNameAsync("imelchenko61@gmail.com").Result == null)
            {
                tUsers user = new tUsers();
                user.UserName = "Ivan";
                user.Email = "imelchenko61@gmail.com";

                IdentityResult result = userManager.CreateAsync(user, "123zxc123").Result;
            }
        }
    }
}
