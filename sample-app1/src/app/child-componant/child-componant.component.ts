import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-componant',
  templateUrl: './child-componant.component.html',
  styleUrls: ['./child-componant.component.scss']
})
export class ChildComponantComponent implements OnInit {
  @Input()
  firstName!: string;

  @Input()
  lastName!: string;

  @Output()
  onUpdateClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateClick(){
    this.onUpdateClick.emit('update called.');
  }

}
