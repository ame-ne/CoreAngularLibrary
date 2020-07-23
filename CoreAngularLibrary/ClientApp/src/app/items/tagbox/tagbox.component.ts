import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tagbox',
  templateUrl: './tagbox.component.html',
  styleUrls: ['./tagbox.component.css']
})
export class TagboxComponent implements OnInit {
  selectedItems: any[] = [];
  items: any[] = [];

  @Input() set dataSource(data) {
    if (data) {
      this.items = data;
      if (this.preSelected && this.preSelected.length > 0) {
        this.selectedItems = this.items.filter(x => this.preSelected.some(i => i[this.preSelectedKeyField] == x[this.keyField]));
        this.items = this.items.filter(i => !this.selectedItems.includes(i));
      }
      this.sort();
    }
  }

  @Input()
  keyField: string = 'id';

  @Input()
  displayField: string = 'title';

  @Input()
  preSelected: any[];

  @Input()
  preSelectedKeyField: string = 'id';

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedItems(): any[] {
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
    if (!key || key == -1) return;
    this.addItem(key);
  }

  sort() {
    this.items.sort((a, b) => (a[this.displayField] > b[this.displayField]) ? 1 : -1);
  }
}
