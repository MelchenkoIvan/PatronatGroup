using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.EntityFramework.Models
{
    public class tToContactUs
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Client")]
        public int ClientId { get; set; }

        public string Description { get; set; }

        public DateTime CreatedOn { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }

        public tClients Client { get; set; }
    }
}
