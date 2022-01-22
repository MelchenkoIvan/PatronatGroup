using PatronatGroup.Common.ModelsDTO;
using PatronatGroup.Interfaces.Facades;
using PatronatGroup.Interfaces.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.Facades
{
    public class LawyersFcd : ILawyersFcd
    {
        private readonly ILawyersSrv _lawyersSrv;
        public LawyersFcd(ILawyersSrv lawyersSrv)
        {
            _lawyersSrv = lawyersSrv;
        }

        public void CreateLawyer(LawyersDTO lawyerDTO)
        {
            _lawyersSrv.CreateLawyer(lawyerDTO);
        }

        public void DeleteLawyer(int lawyerId)
        {
            _lawyersSrv.DeleteLawyer(lawyerId);
        }

        public void DeleteToContactUsClient(int id)
        {
            _lawyersSrv.DeleteToContactUsClient(id);
        }

        public ToContactUsSR GetClients(ToContactUsSC sc)
        {
            return _lawyersSrv.GetClients(sc);
        }
        
        public LawyersSR GetLawyers(LawyersSC sc)
        {
            return _lawyersSrv.GetLawyers(sc);
        }

        public void Submit(ToContactUsDTO toContactUs)
        {
            _lawyersSrv.Submit(toContactUs);
        }

        public void UpdateLawyer(LawyersDTO lawyerDTO)
        {
            _lawyersSrv.UpdateLawyer(lawyerDTO);
        }
    }
}
