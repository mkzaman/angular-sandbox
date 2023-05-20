import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss']
})
export class DynamicListComponent {
  itemList: string[] = ["Code", "Eat"];
  inputText: string = '';

  addListItem() : void {
    this.itemList.push(this.inputText);
  }

  removeListItem(item: string) : void{
    this.itemList.filter(x => x !== 'item');
  }
}

