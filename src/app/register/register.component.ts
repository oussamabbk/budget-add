import { Component, OnInit } from "@angular/core";
import * as EmailValidator from "email-validator";
import { and } from "@angular/router/src/utils/collection";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  nom = "ecrire votre nom ici";
  motdepasse = "mot de passe";
  veremail = "ecrire votre email";
  nombank = "ecrire nom de votre bank";
  numcompte = "ecrire numero de votre compte";
  designeerreur = true;
  designName = true;
  designEmail = true;
  designemdp = true;
  designebank = true;
  designenum = true;
  z = 0;
  email1 = "";

  ngOnInit() {}
  aftercheked() {
    this.nom = "";
  }
  afterchekedmdp() {
    this.motdepasse = null;
  }
  afterchekedemail() {
    this.veremail = "";
  }
  afterchekedbank() {
    this.nombank = "";
  }
  afterchekednum() {
    this.numcompte = "";
  }

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
    } else {
      console.log(designeerreur);
    }
  }
}
