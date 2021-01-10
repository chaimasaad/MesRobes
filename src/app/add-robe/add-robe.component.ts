import { Component, OnInit } from '@angular/core';
import { Robe } from '../model/robe.model';
@Component({
  selector: 'app-add-robe',
  templateUrl: './add-robe.component.html'
 
})
export class AddRobeComponent implements OnInit {

  newRobe = new Robe();
  constructor() { }

  ngOnInit(): void {
  }
addRobe(){
  console.log(this.newRobe);
}
}
