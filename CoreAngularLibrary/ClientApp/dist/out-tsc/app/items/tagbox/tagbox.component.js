var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input } from '@angular/core';
let TagboxComponent = class TagboxComponent {
    constructor() {
        this.selectedItems = [];
        this.items = [];
        this.keyField = 'id';
        this.displayField = 'title';
        this.preSelectedKeyField = 'id';
    }
    set dataSource(data) {
        if (data) {
            this.items = data;
            if (this.preSelected && this.preSelected.length > 0) {
                this.selectedItems = this.items.filter(x => this.preSelected.some(i => i[this.preSelectedKeyField] == x[this.keyField]));
                this.items = this.items.filter(i => !this.selectedItems.includes(i));
            }
            this.sort();
        }
    }
    ngOnInit() {
    }
    getSelectedItems() {
        return this.selectedItems;
    }
    addItem(itemKey) {
        const selectedItem = this.items.filter(x => x[this.keyField] == itemKey)[0];
        this.items = this.items.filter(x => x[this.keyField] != itemKey);
        this.selectedItems.push(selectedItem);
        this.sort();
    }
    removeItem(itemKey) {
        const selectedItem = this.selectedItems.filter(x => x[this.keyField] == itemKey)[0];
        this.selectedItems = this.selectedItems.filter(x => x[this.keyField] != itemKey);
        this.items.push(selectedItem);
        this.sort();
    }
    onSelectItem(e, key) {
        if (!key || key == -1)
            return;
        this.addItem(key);
    }
    sort() {
        this.items.sort((a, b) => (a[this.displayField] > b[this.displayField]) ? 1 : -1);
    }
};
__decorate([
    Input()
], TagboxComponent.prototype, "dataSource", null);
__decorate([
    Input()
], TagboxComponent.prototype, "keyField", void 0);
__decorate([
    Input()
], TagboxComponent.prototype, "displayField", void 0);
__decorate([
    Input()
], TagboxComponent.prototype, "preSelected", void 0);
__decorate([
    Input()
], TagboxComponent.prototype, "preSelectedKeyField", void 0);
TagboxComponent = __decorate([
    Component({
        selector: 'tagbox',
        templateUrl: './tagbox.component.html',
        styleUrls: ['./tagbox.component.css']
    })
], TagboxComponent);
export { TagboxComponent };
//# sourceMappingURL=tagbox.component.js.map