import { Component, OnInit } from '@angular/core';
import{utilisateur}from'../model/utilisateur.model';
import{addresse}from'../model/utilisateur.model';
import{utilisateurservice}from'../shared/utilisateur.service';






@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private utilisateurservice:utilisateurservice) { }
  addresse:[
  {
    pays:string;
    ville:string;
    codepostale:number;
    add:string;

}]
add:any

  ngOnInit() {
  }
  user = JSON.parse(localStorage.getItem("body user"));
  /*trouveraddresse(){
    this.utilisateurservice.findadutili(this.user[0].id).subscribe((data:any)=>
    {
      console.log("true")
    })
  }*/
  
  



}
