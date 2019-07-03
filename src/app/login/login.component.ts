import { Component, OnInit } from '@angular/core';
import{utilisateurservice}from'../shared/utilisateur.service';
import{utilisateur}from'../model/utilisateur.model'
import { Response } from '@angular/http';
import { EmailValidator } from '@angular/forms';
import { TasksService } from 'app/shared/task.service';

import 'rxjs/add/operator/map'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  utilisateurs:[
    {
      email:string;
      nom:string;
      prenom:string;
      password:string;
    }
  ]
  user:any;
  constructor(private utilisateurservice:utilisateurservice,private tasekservice: TasksService) { 
    //this.verifUtilisateur();
  }

  

  

  ngOnInit() {
  }
  verifUtilisateur(e,p){
    console.log(this.utilisateurservice.findUtilisateur(e,p));
    this.utilisateurservice.findUtilisateur(e,p).subscribe((data:any)=>{
      console.log(data);
     this.user=data._body;
     console.log(this.user)
      //data.email
      var pw = this.user.map(t=>t.password);
      console.log(pw);
    })
    
    //this.utilisateurservice.findUtilisateur(this.)
  }
  

}
