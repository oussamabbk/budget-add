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
utilisateurs:[
  {
    email:string;
    bank:string;
    prenom:string;
    password:string;
    num:number;
  }
]
user1:any;

  ngOnInit() {
  }
  user = JSON.parse(localStorage.getItem("body user"));
  trouveraddresse(id){
    this.utilisateurservice.findadutili(id).subscribe((data:any)=>
    {
      this.addresse=JSON.parse(data.text())
      console.log(this.addresse);
      
    })
  }
  /*changerinformation(Id,bank,num,nom,prenom,tel,email,add,pays,ville,code){
    this.utilisateurservice.updateaddresse(Id,pays,ville,code,add).subscribe((data:any)=>
    {
      this.addresse=JSON.parse(data.text())
      console.log(this.addresse);
      
    })


  }*/
  new(email,nom,bank,num,tel){
    
    this.utilisateurservice.addutilisateur(email,nom,bank,num,tel).subscribe(
      (res : any) =>{
          console.log(res);

         
          //this.router.navigate(["/timer"]);
          
          
          
      })


  }



}
