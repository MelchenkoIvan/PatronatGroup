using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.EntityFramework.Models
{
    public class tUsers : IdentityUser
    {
        public bool IsDefaultAdmin { get; set; }
        public bool IsDeleted { get; set; }
    }
}
