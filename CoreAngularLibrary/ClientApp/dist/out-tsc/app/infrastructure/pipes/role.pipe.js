var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
import { Role } from '../../api/models';
let RoleTitle = class RoleTitle {
    constructor() { }
    transform(item) {
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
        return 'Ты кто?';
    }
};
RoleTitle = __decorate([
    Pipe({ name: 'roleTitle' })
], RoleTitle);
export { RoleTitle };
let IsAdmin = class IsAdmin {
    constructor() { }
    transform(user) {
        return user && user.role == Role.Administrator;
    }
};
IsAdmin = __decorate([
    Pipe({ name: 'isAdmin' })
], IsAdmin);
export { IsAdmin };
let IsStorekeeper = class IsStorekeeper {
    constructor() { }
    transform(user) {
        return user && user.role == Role.Storekeeper;
    }
};
IsStorekeeper = __decorate([
    Pipe({ name: 'isStorekeeper' })
], IsStorekeeper);
export { IsStorekeeper };
let IsLibrarian = class IsLibrarian {
    constructor() { }
    transform(user) {
        return user && user.role == Role.Librarian;
    }
};
IsLibrarian = __decorate([
    Pipe({ name: 'isLibrarian' })
], IsLibrarian);
export { IsLibrarian };
//# sourceMappingURL=role.pipe.js.map