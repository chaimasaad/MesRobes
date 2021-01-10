import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RobesComponent } from './robes/robes.component';
import { AddRobeComponent } from './add-robe/add-robe.component';

const routes: Routes = [
  {path:"robes",component :RobesComponent },
  {path:"add-robe",component :  AddRobeComponent },
  {path:"",redirectTo:"robe" ,  pathMatch : "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
