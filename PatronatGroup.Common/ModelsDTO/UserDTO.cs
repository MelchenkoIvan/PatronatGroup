using PatronatGroup.Common.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.Common.ModelsDTO
{
    public class UserDTO
    {
        public string Email { get; set; }
        public bool IsDefaultAdmin { get; set; }
        public string Token { get; set; }

    }
    public class UserSR : SearchResult<UserDTO>
    {
    }
    public class UserSC : SearchCriteria
    {
    }
}
