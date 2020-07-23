var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
import * as moment from 'moment';
let FormatDate = class FormatDate {
    constructor() { }
    transform(date, format) {
        if (!date) {
            return '';
        }
        if (format) {
            return moment(date).format(format);
        }
        return moment(date).format('DD.MM.YYYY');
    }
};
FormatDate = __decorate([
    Pipe({ name: 'formatDate' })
], FormatDate);
export { FormatDate };
//# sourceMappingURL=date.pipe.js.map