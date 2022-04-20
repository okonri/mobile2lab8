import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss'],
})
export class DataRowComponent implements OnInit {

  @Input() location: string;
  @Input() index: number;
  @Output() removeItemCall = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  removeItem(){
    this.removeItemCall.next(this.index);
  }

}
