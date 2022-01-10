using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.Common.Core
{
    public class SearchCriteria
    {
        public SearchCriteria()
        {
        }

        public SearchCriteria(SearchCriteria sc)
        {
            PageNumber = sc.PageNumber;
            RowsOnPage = sc.RowsOnPage;
        }

        public int PageNumber { get; set; }

        public int RowsOnPage { get; set; }

    }
}
