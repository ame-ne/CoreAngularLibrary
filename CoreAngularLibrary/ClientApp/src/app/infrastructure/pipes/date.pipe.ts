import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'formatDate' })
export class FormatDate implements PipeTransform {
    constructor() { }

    transform(date: Date, format?: string) {
        if (!date) {
            return '';
        }
        if (format) {
            return moment(date).format(format);
        }
        return moment(date).format('DD.MM.YYYY');
    }
}