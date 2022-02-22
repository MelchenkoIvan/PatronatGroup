using PatronatGroup.Common.Core;
using PatronatGroup.Common.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
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

        public string DescriptionUA { get; set; }

        public string DescriptionEN { get; set; }

        public string Position { get; set; }

        public string Email { get; set; }

        public string Image { get; set; }


        public void SetLang(string lang)
        {
           Description = lang == Languages.En.ToString().ToLower() ? DescriptionEN : DescriptionUA;
        }

    }
    public class LawyersSR : SearchResult<LawyersDTO>
    {

    }

    public class LawyersSC : SearchCriteria
    {
        public string Search { get; set; }
        public string Lang { get; set; }
    }
}
