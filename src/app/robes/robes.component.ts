import { Component, OnInit } from '@angular/core';
import { Robe } from '../model/robe.model';
@Component({
  selector: 'app-robes',
  templateUrl: './robes.component.html'

})
export class RobesComponent implements OnInit {

  robes : Robe[]; 

  constructor() {
   

   }

  ngOnInit(): void {
  }

}
