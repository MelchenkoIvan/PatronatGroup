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
        void DeleteToContactUsClient(int id);
        ToContactUsSR GetClients(ToContactUsSC sc);
        LawyersSR GetLawyers(LawyersSC sc);
        UserSR GetAdmins(UserSC sc);

        void Submit(ToContactUsDTO toContactUs);
        void UpdateLawyer(LawyersDTO lawyerDTO);
    }
}
