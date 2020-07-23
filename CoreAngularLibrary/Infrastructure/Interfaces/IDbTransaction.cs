using System;

namespace CoreAngularLibrary.Infrastructure.Interfaces
{
    public interface IDbTransaction : IDisposable
    {
        void Commit();
        void Rollback();
    }
}
