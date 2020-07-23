using System.Collections.Generic;

namespace CoreAngularLibrary.Models
{
    public class Genre : BaseEntity
    {
        public string Title { get; set; }
        public ICollection<BookGenre> BookGenres { get; set; }
    }
}
