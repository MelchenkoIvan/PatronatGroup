using PatronatGroup.Common.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.Interfaces.Facades
{
    public interface ILawyersFcd
    {
        void CreateLawyer(LawyersDTO lawyerDTO);
        void DeleteLawyer(int lawyerId);
        List<ToContactUsDTO> GetClients();
        List<LawyersDTO> GetLawyers();

        void Submit(ToContactUsDTO toContactUs);
        void UpdateLawyer(LawyersDTO lawyerDTO);
    }
}
