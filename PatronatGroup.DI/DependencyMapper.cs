using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PatronatGroup.EntityFramework;
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

            //serviceCollection.AddScoped<IAdministrationFcd, AdministrationFcd>();


            //var mapperConfig = new MapperConfiguration(mc =>
            //{
            //    mc.AddProfile(new MappingProfile());
            //});

           // IMapper mapper = mapperConfig.CreateMapper();
           // serviceCollection.AddSingleton(mapper);
        }
    }
}

