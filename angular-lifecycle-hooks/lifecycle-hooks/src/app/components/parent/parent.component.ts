import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, DoCheck{
 
  userName : string = 'Maria';

  ngOnInit(): void {
    console.log('ngOnInit from the parent component')
  }

  updateUser(){
    this.userName = 'Chris';
  }

  ngDoCheck(): void {
    console.log('ngDoCheck in the parent');
  }
}
