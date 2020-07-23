using CoreAngularLibrary.Infrastructure.Interfaces;
using System.Collections.Generic;

namespace CoreAngularLibrary.Models
{
    public class Author : BaseEntity, IEntityWithAttachment
    {
        public string FIO { get; set; }
        public ICollection<BookAuthor> BookAuthors { get; set; }
    }
}
