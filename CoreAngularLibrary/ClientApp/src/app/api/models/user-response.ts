import { Role } from './role';

export interface UserResponse {
    id: number;
    login: string;
    role: Role;
    token?: string;
}