import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-componant',
  templateUrl: './parent-componant.component.html',
  styleUrls: ['./parent-componant.component.scss']
})
export class ParentComponantComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  
  constructor() { }

  ngOnInit(): void {
    this.firstName = 'bala';
    this.lastName = 'sherkar';
  }

  updateClicked(event: string){
    alert(event);
  }
}
