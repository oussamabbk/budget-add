import { Component, OnInit } from "@angular/core";
import * as EmailValidator from "email-validator";
import { and } from "@angular/router/src/utils/collection";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { utilisateur } from "../model/utilisateur.model";

import { utilisateurservice } from "../shared/utilisateur.service";
import { TasksService } from "app/shared/task.service";
import "rxjs/add/operator/map";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  utilisateurs: [
    {
      email: string;

      nom: string;
      bank: string;
      password: string;
      num: number;
    }
  ];
  user: any;
  designeerreur;
  designName;
  designEmail;
  designemdp;
  designebank;
  designenum;

  constructor(
    private router: Router,
    private utilisateurservice: utilisateurservice
  ) {}

  ngOnInit() {}
  aftercheked(naa) {
    if (naa == "") {
      return (this.designName = false);
    } else {
      console.log("truenom");
      this.designName = true;
      return true;
    }
  }
  afterchekedmdp(mdp1, mdp2) {
    if (mdp1 != mdp2 || mdp1 == "") {
      this.designemdp = false;
      return false;
    } else {
      console.log("truemdp");
      this.designemdp = true;
      return true;
    }
  }
  afterchekedemail(email1) {
    if (EmailValidator.validate(email1) != true) {
      this.designEmail = false;
      return false;
    } else {
      console.log("trueemail");
      this.designEmail = true;
      return true;
    }
  }
  afterchekedbank(nomb) {
    if (nomb == "") {
      this.designebank = false;
      return false;
    } else {
      console.log("truenomb");
      this.designebank = true;
      return true;
    }
  }
  afterchekednum(num) {
    const re = new RegExp("^[0-9]*$");
    let x = num.toString();
    if (!re.test(x) || num != "") {
      this.designenum = true;
      return true;
    } else {
      console.log("truenum");
      this.designenum = true;
      return true;
    }
  }

  add(naa, mdp1, mdp2, email1, nomb, num) {
    if (
      this.aftercheked(naa) == true &&
      this.afterchekedbank(nomb) == true &&
      this.afterchekedemail(email1) == true &&
      this.afterchekedmdp(mdp1, mdp2) == true
    ) {
      const user: utilisateur = {
        email: email1,
        nom: naa,
        prenom: naa,
        bank: nomb,
        password: mdp1,
        num: num,
        tel: num
      };

      this.utilisateurservice
        .addutilisateur(
          user.email,
          user.nom,
          user.bank,
          user.password,
          user.num
        )
        .subscribe((res: any) => res);
    }
    this.utilisateurservice
      .findUtilisateur(email1, mdp1)
      .subscribe((data: any) => {
        let userId = localStorage.getItem("user_id");
        console.log(userId);

        if (userId.length !== 0) {
          this.router.navigate(["/timer"]);
        }
      });
  }
}

/*
  verifcheck(z) {
    z++;
  }
  verif(naa, mdp1, mdp2, email1, nomb, num, designeerreur) {
    let y = 0;

    if (naa == "") {
      this.nom = "ecrire votre nom";
      y++;
      this.designName = false;
      console.log(designeerreur);
    } else {
      this.designeerreur = true;
    }

    if (mdp1 != mdp2 || mdp1 == "") {
      this.motdepasse = "verifier votre mot de passe";
      y++;
      this.designeerreur = false;
      this.designemdp = false;
    }
    if (EmailValidator.validate(email1) != true) {
      this.veremail = "email Invalide";
      this.designEmail = false;
      console.log(designeerreur);
      y++;

      designeerreur = false;
      console.log(designeerreur);
    }
    if (nomb == "") {
      this.nombank = "ecrire nom de votre bank";
      y++;
      this.designeerreur = false;
      this.designebank = false;
      console.log(designeerreur);
    }
    const re = new RegExp("^[0-9]*$");
    let x = num.toString();
    if (!re.test(x) || num == "") {
      this.numcompte = " ecrire numero de votre compte";
      y++;
      this.designenum = false;
      this.designeerreur = false;
      console.log(designeerreur);
    }
    if (y == 0 && this.z == 0) {
      this.router.navigate(["/dashboard"]);
      return true
    } else {
      console.log(designeerreur);
      return false
    }
  }
  addUser(email1,naa,nomb,mdp1,mdp2,designeerreur,num){
    
    let y=0;
    if (naa== "") {
      this.nom= "ecrire votre nom";
    
      this.designName = false;
      console.log(designeerreur);
    } else {
      this.designeerreur = true;
      y++;
    }

    if (mdp1 != mdp2 || mdp1 == "") {
      this.motdepasse = "verifier votre mot de passe";
      y++;
      this.designeerreur = false;
      this.designemdp = false;
    }
    if (EmailValidator.validate(email1) != true) {
      this.veremail = "email Invalide";
      this.designEmail = false;
      console.log(designeerreur);
      y++;

      designeerreur = false;
      console.log(designeerreur);
    }
    if (nomb == "") {
      this.nombank = "ecrire nom de votre bank";
      y++;
      this.designeerreur = false;
      this.designebank = false;
      console.log(designeerreur);
    }
    const re = new RegExp("^[0-9]*$");
    let x = num.toString();
    if (!re.test(x) || num == "") {
      this.numcompte = " ecrire numero de votre compte";
      y++;
      this.designenum = false;
      this.designeerreur = false;
      console.log(designeerreur);
    }
    const user:utilisateur={
      email:email1,
      nom:naa,
      bank:nomb,
      password:mdp1,
      num:num

    };
    if (y == 0 && this.z == 0) {
      
        return true;

      

      
      






    } else {
      
      console.log(designeerreur);
      return false
    }
    
    

  }
  */
