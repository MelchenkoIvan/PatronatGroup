using Microsoft.EntityFrameworkCore;
using PatronatGroup.EntityFramework.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.EntityFramework
{
    public class Context : Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityDbContext<tUsers>
    {

        public Context(DbContextOptions<Context> options): base(options){ }

        public DbSet<tUsers> tUsers { get; set; }
        public DbSet<tLawyers> tLawyers { get; set; }
        public DbSet<tToContactUs> tToContactUs { get; set; }
    }
}
