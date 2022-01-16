import { Component, Input, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
