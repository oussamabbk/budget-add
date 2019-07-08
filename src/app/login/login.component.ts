import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{utilisateurservice}from'../shared/utilisateur.service';
import{utilisateur}from'../model/utilisateur.model'
import { Response } from '@angular/http';
import { EmailValidator } from '@angular/forms';
import { TasksService } from 'app/shared/task.service';
import { Router } from "@angular/router";

import 'rxjs/add/operator/map'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { ConditionalExpr } from '@angular/compiler';
import { json } from 'body-parser';

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
    this.utilisateurservice.findUtilisateur(e,p).subscribe((data:any)=>{
      console.log("xxxxxx",data._body);
      
     this.user=data._body;
     this.utilisateurs=JSON.parse(data.text())
     if (this.utilisateurs.length==1)
     {
       let e=this.user[0].email;
       let id = this.user.id;
      console.log(this.user);
      console.log("xxxxx",id);
      localStorage.setItem("body user", this.user[0].id);
      


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

