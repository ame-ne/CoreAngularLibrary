using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace CoreAngularLibrary.Infrastructure
{
    public class AuthOptions
    {
        public const string ISSUER = "CoreAngularLibrary"; // издатель токена
        public const string AUDIENCE = "ClientApp"; // потребитель токена
        public const int LIFETIME = 10; // время жизни токена - 10 минут
        public static SymmetricSecurityKey GetSymmetricSecurityKey(string key)
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key));
        }
    }
}
