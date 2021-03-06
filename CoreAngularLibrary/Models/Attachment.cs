﻿using CoreAngularLibrary.Infrastructure;
using CoreAngularLibrary.Infrastructure.Interfaces;

namespace CoreAngularLibrary.Models
{
    public class Attachment : BaseEntity
    {
        public string Name { get; set; }
        public AttachmentTypeEnum Type { get; set; }
        public bool IsMain { get; set; }
        public bool IsPreview { get; set; }
        public int BlobId { get; set; }
        public Blob Blob { get; set; }
        public int EntityId { get; set; }
        public IEntityWithAttachment Entity { get; set; }
    }
}
