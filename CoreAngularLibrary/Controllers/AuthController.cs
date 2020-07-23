using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreAngularLibrary.Infrastructure;
using CoreAngularLibrary.Infrastructure.Dto;
using CoreAngularLibrary.Infrastructure.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CoreAngularLibrary.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthService _userService;

        public AuthController(IAuthService userService)
        {
            _userService = userService;
        }

        [HttpPost("registration")]
        public async Task<IActionResult> Registration([FromBody] RegistrationRequest model)
        {
            var response = await _userService.Registration(model);
            return Ok(response);
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model);
            if (response == null)
            {
                return BadRequest(new { errorText = "Неверный логин или пароль" });
            }
            return Ok(response);
        }

        [HttpPost("checkAccess")]
        [Authorize]
        public IActionResult CheckAccess([FromBody] List<RoleEnum> roles)
        {
            //если роли не указаны, проверку что пользователь просто авторизован, выполнит атрибут
            if (!roles.Any())
            {
                return Ok(true);
            }
            //если проверка не пройдена, возвращаю не Ok(false), а Forbid
            return roles.Any(x => HttpContext.User.IsInRole(x.ToString()))
                ? Ok(true)
                : (IActionResult)Forbid();
        }
    }
}
