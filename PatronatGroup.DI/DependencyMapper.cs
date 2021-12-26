using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using PatronatGroup.EntityFramework;
using PatronatGroup.EntityFramework.Models;
using PatronatGroup.EntityFramework.Services;
using PatronatGroup.Facades;
using PatronatGroup.Interfaces.Facades;
using PatronatGroup.Interfaces.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.DI
{
    public static class DependencyMapper
    {
        public static void AddDependencies(this IServiceCollection serviceCollection, IConfiguration configuration)
        {
            serviceCollection
                .AddDbContext<Context>(options =>
                    options.UseSqlServer(configuration.GetConnectionString("PatronatGroupContext"))
                );
            serviceCollection.TryAddSingleton<ISystemClock, SystemClock>();
            serviceCollection.AddIdentityCore<tUsers>(o =>
            {
                o.Password.RequireDigit = true;
                o.Password.RequireLowercase = false;
                o.Password.RequireUppercase = false;
                o.Password.RequireNonAlphanumeric = false;
                o.Password.RequiredLength = 6;
                o.User.RequireUniqueEmail = true;
            })
             .AddEntityFrameworkStores<Context>()
             .AddSignInManager<SignInManager<tUsers>>();

            serviceCollection.AddScoped<IUserFcd, UserFcd>();
            serviceCollection.AddScoped<IUserSrv, UserSrv>();


            //var mapperConfig = new MapperConfiguration(mc =>
            //{
            //    mc.AddProfile(new MappingProfile());
            //});

            // IMapper mapper = mapperConfig.CreateMapper();
            // serviceCollection.AddSingleton(mapper);
          
        }
    }
}

