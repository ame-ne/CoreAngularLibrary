using CoreAngularLibrary.Infrastructure.Interfaces;

namespace CoreAngularLibrary.Models
{
    public class BaseEntity : IEntity
    {
        public int Id { get; set; }
    }
}
