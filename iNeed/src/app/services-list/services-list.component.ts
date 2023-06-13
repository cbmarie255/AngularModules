import { Component } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {
  items: string[] = ['Donor', 'Recipient', 'Giver'];
  selectedItems: string[] = [];

  toggleSelection(item: string): void {
    const index = this.selectedItems.indexOf(item);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(item);
    }
  }

  isSelected(item: string): boolean {
    return this.selectedItems.includes(item);
  }
}
