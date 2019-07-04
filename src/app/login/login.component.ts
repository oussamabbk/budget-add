import { Component, OnInit } from '@angular/core';
import{utilisateurservice}from'../shared/utilisateur.service';
import{utilisateur}from'../model/utilisateur.model'
import { Response } from '@angular/http';
import { EmailValidator } from '@angular/forms';
import { TasksService } from 'app/shared/task.service';
import { Router } from "@angular/router";

import 'rxjs/add/operator/map'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  x=true;
  y=true;

  

  
  utilisateurs:[
    {
      email:string;
      bank:string;
      prenom:string;
      password:string;
      num:number;
    }
  ]
  user:any;
  constructor(private utilisateurservice:utilisateurservice,private tasekservice: TasksService,private router:Router) { 
    //this.verifUtilisateur();
  }

  

  

  ngOnInit() {
  }
  verifUtilisateur(e,p){
    //console.log(this.utilisateurservice.findUtilisateur(e,p));
    this.utilisateurservice.findUtilisateur(e,p).subscribe((data:any)=>{
      //console.log(data);
     this.user=data._body;
     //console.log(this.user);
     this.utilisateurs=JSON.parse(data.text())
     console.log(this.utilisateurs);
     if (this.utilisateurs.length==1)
     {
      this.router.navigate(["/timer"]);
     }
     else{
       this.y=false;
       this.x=false;
     }
     
    
     //console.log(this.user)
      //data.email
      //var pw = this.user.map(t=>t.password);
      //console.log(pw);
      
    })
    //if(this.user!=[""]){
      ///this.router.navigate(["/timer"]);

    //}
    
    
    //this.utilisateurservice.findUtilisateur(this.)
  }
  /*verifUtilisateur(e){
    if(this.utilisateurservice.findUtilisateur(e)){
      console.log(this.utilisateurservice.findUtilisateur(e));
      this.router.navigate(["/timer"]);
      
    }
    this.utilisateurservice.findUtilisateur(e).subscribe((data:any)=>)
  }
  */
 gotoregister() {
  this.router.navigate(["/register"]);
}
}

