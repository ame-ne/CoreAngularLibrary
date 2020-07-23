using CoreAngularLibrary.Infrastructure.Dto;
using System.Threading.Tasks;

namespace CoreAngularLibrary.Infrastructure.Interfaces
{
    public interface IAuthService
    {
        UserResponse Authenticate(AuthenticateRequest model);
        Task<UserResponse> Registration(RegistrationRequest model);
    }
}
