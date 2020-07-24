using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CoreAngularLibrary.Attributes;
using CoreAngularLibrary.Infrastructure.Interfaces;
using CoreAngularLibrary.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoreAngularLibrary.Controllers
{
    [Route("api/attachments")]
    [ApiController]
    [Authorize]
    public class AttachmentsController : ControllerBase
    {
        private readonly IGenericRepository<Blob> _blobRepo;

        public AttachmentsController(IGenericRepository<Blob> blobRepo)
        {
            _blobRepo = blobRepo;
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        [IgnoreLogging]
        public async Task<IActionResult> Get(int id)
        {
            var blob = await _blobRepo.GetByIdAsync(id);
            return File(blob.Content, "application/octet-stream");
        }

        [HttpPost("upload")]
        [Authorize(Roles = "Administrator,Storekeeper")]
        public async Task<IActionResult> Upload()
        {
            if (HttpContext.Request.Form.Files.Any())
            {
                var file = HttpContext.Request.Form.Files[0];
                byte[] content = await GetByteArrayFromImageAsync(file);
                Blob blob = new Blob()
                {
                    Content = content,
                    Length = content.Length
                };
                await _blobRepo.CreateAsync(blob);
                return Ok(blob.Id);
            }
            else
            {
                throw new ApplicationException("Отсутствуют файлы для загрузки!");
            }
        }

        private async Task<byte[]> GetByteArrayFromImageAsync(IFormFile file)
        {
            using (var target = new MemoryStream())
            {
                await file.CopyToAsync(target);
                return target.ToArray();
            }
        }
    }
}
