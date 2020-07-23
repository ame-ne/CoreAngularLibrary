import { AttachmentType } from './attachment-type';

export interface Attachment {
    id?: number;
    name?: string;
    type?: AttachmentType;
    isMain?: boolean;
    isPreview?: boolean;
    blobId?: number;
    entityId?: number;
}