using AutoMapper;
using PatronatGroup.Common.ModelsDTO;
using PatronatGroup.EntityFramework.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.EntityFramework.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<tLawyers, LawyersDTO>().ReverseMap();
            CreateMap<tToContactUs, ToContactUsDTO>().ReverseMap();
        }
    }
}
