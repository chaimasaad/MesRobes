import { Injectable } from '@angular/core';
import {Robe} from '../model/robe.model'

@Injectable({
  providedIn: 'root'
})
export class RobeService {
  Robes : Robe[];//un tableau de robe

  constructor() {
    this.Robes = [
      
      {  idRobe : 2, nomRobe :"Jupe Courte",prixRobe:50000 , dateCréation:new Date("15/01/2020") },
      {  idRobe : 4, nomRobe :"Robe Chic",prixRobe:60000 , dateCréation:new Date("20/01/2020") },
      {  idRobe : 5, nomRobe :"Dress Enfant",prixRobe:30000 , dateCréation:new Date("2/01/2020") }
    ]
   }
   listeRobe():Robe[]{
 return this.Robes;
   }
}
