import { Pipe, PipeTransform } from '@angular/core';
import { Role, UserResponse } from '../../api/models';

@Pipe({ name: 'roleTitle' })
export class RoleTitle implements PipeTransform {
    constructor() { }

    transform(item: Role) {
        if (item == Role.Administrator) {
            return 'Администратор';
        }
        if (item == Role.Librarian) {
            return 'Библиотекарь';
        }
        if (item == Role.Reader) {
            return 'Читатель';
        }
        if (item == Role.Storekeeper) {
            return 'Кладовщик';
        }
        return 'Ты кто?'
    }
}

@Pipe({ name: 'isAdmin' })
export class IsAdmin implements PipeTransform {
    constructor() { }

    transform(user: UserResponse) {
        return user && user.role == Role.Administrator;
    }
}

@Pipe({ name: 'isStorekeeper' })
export class IsStorekeeper implements PipeTransform {
    constructor() { }

    transform(user: UserResponse) {
        return user && user.role == Role.Storekeeper;
    }
}

@Pipe({ name: 'isLibrarian' })
export class IsLibrarian implements PipeTransform {
    constructor() { }

    transform(user: UserResponse) {
        return user && user.role == Role.Librarian;
    }
}
