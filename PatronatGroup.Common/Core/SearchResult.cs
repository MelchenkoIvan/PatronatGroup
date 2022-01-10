using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronatGroup.Common.Core
{
    [Serializable]
    public abstract class SearchResult<T>
    {
        public int TotalCount { get; set; }

        public int CurrentPageNumber { get; set; }

        public IEnumerable<T> Items { get; set; }

        public SearchResult()
        {
            TotalCount = 0;
            CurrentPageNumber = 1;
            Items = Enumerable.Empty<T>();
        }
    }
}
