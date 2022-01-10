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
        private readonly string dateFormat = "yyyy-MM-dd";


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

        public ToContactUsSR GetClients(ToContactUsSC sc)
        {
            var clients = _mapper.Map<List<ToContactUsDTO>>(_appDbContext.tToContactUs).ToList();
            if(sc.Search != null)
            {
                var simpleSearch = sc.Search.ToLower();

                clients = clients.Where(x => x.FullName.ToLower().Contains(simpleSearch) ||
                                            x.PhoneNumber.ToLower().Contains(simpleSearch) ||
                                            x.Email.ToLower().Contains(simpleSearch) ||
                                            x.Description.ToLower().Contains(simpleSearch)).ToList();
                                            //x.Description.ToString(dateFormat).Contains(simpleSearch).ToLis ;
            }
            return new ToContactUsSR()
            {
                CurrentPageNumber = sc.PageNumber,
                TotalCount = clients.Count(),
                Items = clients.Skip((sc.PageNumber - 1) * sc.RowsOnPage).Take(sc.RowsOnPage)
                .ToList()
            };
        }

        public LawyersSR GetLawyers(LawyersSC sc)
        {
            var lawyers = _mapper.Map<List<LawyersDTO>>(_appDbContext.tLawyers).ToList();
            if (sc.Search != null)
            {
                var simpleSearch = sc.Search.ToLower();

                lawyers = lawyers.Where(x => x.FullName.ToLower().Contains(simpleSearch) ||
                                            x.Description.ToLower().Contains(simpleSearch) ||
                                            x.Position.ToLower().Contains(simpleSearch)).ToList();
            }
            return new LawyersSR()
            {
                CurrentPageNumber = sc.PageNumber,
                TotalCount = lawyers.Count(),
                Items = lawyers.Skip((sc.PageNumber - 1) * sc.RowsOnPage).Take(sc.RowsOnPage)
                .ToList()
            };
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
