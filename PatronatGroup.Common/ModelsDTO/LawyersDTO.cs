using PatronatGroup.Common.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.Common.ModelsDTO
{
    public class LawyersDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public string FullName { get { return $"{Name} {Surname}"; } }

        public string Description { get; set; }

        public string Position { get; set; }
    }
    public class LawyersSR : SearchResult<LawyersDTO>
    {
    }

    public class LawyersSC : SearchCriteria
    {
        public string Search { get; set; }
    }
}
