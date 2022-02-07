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
        //private readonly string dateFormat = "yyyy-MM-dd";


        public LawyersSrv(Context appDbContext, IMapper mapper)
        {
            _appDbContext = appDbContext;
            _mapper = mapper;
        }
        public void CreateLawyer(LawyersDTO lawyerDTO)
        {
            var lawyer = _mapper.Map<tLawyers>(lawyerDTO);
            lawyer.CreatedOn = DateTime.Now;
            _appDbContext.tLawyers.Add(lawyer);
            _appDbContext.SaveChanges();
        }

        public void DeleteLawyer(int lawyerId)
        {
            var lawyer = _appDbContext.tLawyers.FirstOrDefault(x => x.Id == lawyerId);
            lawyer.IsDeleted = true;
            lawyer.DeletedOn = DateTime.Now;
            _appDbContext.SaveChanges();
        }
        public void DeleteToContactUsClient(int id)
        {
            var toContactUs = _appDbContext.tToContactUs.FirstOrDefault(x => x.ClientId == id);
            toContactUs.IsDeleted = true;
            toContactUs.DeletedOn = DateTime.Now;
            _appDbContext.SaveChanges();
        }

        public UserSR GetAdmins(UserSC sc)
        {
            var req = _appDbContext.tUsers.Where(x => !x.IsDeleted).Select(x => new UserDTO {Email = x.Email,IsDefaultAdmin = x.IsDefaultAdmin}).ToList();
            return new UserSR()
            {
                CurrentPageNumber = sc.PageNumber,
                TotalCount = req.Count(),
                Items = req.Skip((sc.PageNumber - 1) * sc.RowsOnPage).Take(sc.RowsOnPage)
              .ToList()
            };

        }

        public ToContactUsSR GetClients(ToContactUsSC sc)
        {
            var clients = (from cl in _appDbContext.tClients
                            join tc in _appDbContext.tToContactUs
                            on cl.Id equals tc.ClientId
                            where tc.IsDeleted == false
                            select new ToContactUsDTO
                            { 
                                Id = cl.Id,
                                FullName = cl.FullName,
                                PhoneNumber = cl.PhoneNumber,
                                Email = cl.Email,
                                Description = tc.Description
                            }).ToList();
            if (sc.Search != null)
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
            var req = _appDbContext.tLawyers.Where(x => !x.IsDeleted);
            var lawyers = _mapper.Map<List<LawyersDTO>>(req).ToList();
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
            var client = new tClients
            {
                Email = toContactUs.Email,
                FullName = toContactUs.FullName,
                PhoneNumber = toContactUs.PhoneNumber,
            };
            _appDbContext.tClients.Add(client);
            _appDbContext.SaveChanges();

            var toContactUsDb = new tToContactUs
            {
                ClientId = client.Id,
                Description = toContactUs.Description,
                CreatedOn = DateTime.Now
            };
            _appDbContext.tToContactUs.Add(toContactUsDb);
            _appDbContext.SaveChanges();
        }

        public void UpdateLawyer(LawyersDTO lawyerDTO)
        {
            var lawyer = _mapper.Map<tLawyers>(lawyerDTO);
            _appDbContext.Update(lawyer);
            _appDbContext.SaveChanges();
        }
    }
}
