import { Pipe, PipeTransform } from '@angular/core';
import { DisplayBook } from '../../api/models';

@Pipe({ name: 'searchFilter' })
export class SearchFilter implements PipeTransform {
    constructor() { }

    transform(items: DisplayBook[], searchText: string): DisplayBook[] {
        if (!items || items.length === 0) {
            return [];
        }
        if (!searchText) {
            return items;
        }

        searchText = searchText.toLowerCase();

        return items.filter(item => item.title.toLowerCase().includes(searchText)
            || item.authors.toLowerCase().includes(searchText)
            || item.genres.toLowerCase().includes(searchText));
    }
}