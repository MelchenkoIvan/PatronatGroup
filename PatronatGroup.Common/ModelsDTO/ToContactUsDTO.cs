using PatronatGroup.Common.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.Common.ModelsDTO
{
    public class ToContactUsDTO
    {
        public int Id { get; set; }

        public string FullName { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string Description { get; set; }
    }

    public class ToContactUsSR : SearchResult<ToContactUsDTO>
    {
    }

    public class ToContactUsSC : SearchCriteria
    {
        public string Search { get; set; }
    }

}