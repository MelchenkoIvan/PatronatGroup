using AutoMapper;
using PatronatGroup.Common.ModelsDTO;
using PatronatGroup.EntityFramework.Models;
using PatronatGroup.Interfaces.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.EntityFramework.Services
{
    public class LawyersSrv : ILawyersSrv
    {
        private readonly Context _appDbContext;
        private readonly IMapper _mapper;


        public LawyersSrv(Context appDbContext, IMapper mapper)
        {
            _appDbContext = appDbContext;
            _mapper = mapper;
        }
        public void CreateLawyer(LawyersDTO lawyerDTO)
        {
            _appDbContext.tLawyers.Add(_mapper.Map<tLawyers>(lawyerDTO));
            _appDbContext.SaveChanges();
        }

        public void DeleteLawyer(int lawyerId)
        {
            var lawyer = _appDbContext.tLawyers.FirstOrDefault(x => x.Id == lawyerId);
            _appDbContext.tLawyers.Remove(lawyer);
            _appDbContext.SaveChangesAsync();
        }

        public List<ToContactUsDTO> GetClients()
        {
            return _mapper.Map<List<ToContactUsDTO>>(_appDbContext.tToContactUs).ToList();
        }

        public List<LawyersDTO> GetLawyers()
        {
            return _mapper.Map<List<LawyersDTO>>(_appDbContext.tLawyers).ToList();
        }

        public void Submit(ToContactUsDTO toContactUs)
        {
            _appDbContext.tToContactUs.Add(_mapper.Map<tToContactUs>(toContactUs));
            _appDbContext.SaveChanges();
        }

        public void UpdateLawyer(LawyersDTO lawyerDTO)
        {
            _appDbContext.Update(lawyerDTO);
            _appDbContext.SaveChanges();
        }
    }
}
