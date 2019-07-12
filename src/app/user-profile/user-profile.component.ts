import { Component, OnInit } from "@angular/core";
import { utilisateur } from "../model/utilisateur.model";
import { addresse } from "../model/utilisateur.model";
import { utilisateurservice } from "../shared/utilisateur.service";
import { balancePreviousStylesIntoKeyframes } from "@angular/animations/browser/src/util";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  num1 = "";
  bank1 = "";
  email1 = "";
  nom1 = "";
  tel1 = "";
  prenom1 = "";
  add1 = "";
  pays1 = "";
  codepostale1 = "";
  ville1 = "";
  pass = "bbk";
  emailfix = "";
  y = "";
  constructor(private utilisateurservice: utilisateurservice) {}
  addresse: [
    {
      pays: string;
      ville: string;
      codepostale: number;
      add: string;
    }
  ];
  addr: any;
  utilisateurs: [
    {
      email: string;
      bank: string;
      nom: string;
      password: string;
      prenom: string;
      num: number;
      tel: number;
    }
  ];
  user: any;

  ngOnInit() {
    let userId = localStorage.getItem("user_id");
    this.utilisateurservice.SearchParId(userId).subscribe((data: any) => {
      let x = data.json();
      this.num1 = x[0].num;
      this.bank1 = x[0].bank;
      this.email1 = x[0].email;
      this.nom1 = x[0].nom;
      this.tel1 = x[0].tel;
      this.prenom1 = x[0].prenom;
    });
    this.utilisateurservice.getAddresseUtlili(userId).subscribe((data: any) => {
      let y = data.json();
      if (y.length !== 0) {
        this.add1 = y[0].add;
        this.pays1 = y[0].pays;
        this.codepostale1 = y[0].codepostale;
        this.ville1 = y[0].ville;
      }
    });
  }

  /*changerinformation(Id,bank,num,nom,prenom,tel,email,add,pays,ville,code){
    this.utilisateurservice.updateaddresse(Id,pays,ville,code,add).subscribe((data:any)=>
    {
      this.addresse=JSON.parse(data.text())
      console.log(this.addresse);
      
    })


  }*/
  updateUSer(
    email1,
    nom1,
    prenom1,
    bank1,
    num1,
    tel1,
    mdp1,
    mdp2,
    pays,
    ville,
    codepostale,
    add
  ) {
    let userId = localStorage.getItem("user_id");
    var mdp = "";

    this.utilisateurservice.SearchParId(userId).subscribe((data: any) => {
      console.log(this.emailfix);
    });
    if (mdp1 == mdp2) {
      mdp = mdp1;

      const user: utilisateur = {
        email: email1,
        nom: nom1,
        prenom: prenom1,
        bank: bank1,
        num: num1,
        password: mdp,

        tel: tel1
      };

      this.utilisateurservice
        .updateUtlisateur(
          user.email,
          user.nom,
          user.prenom,
          user.password,
          user.bank,
          user.num,

          user.tel
        )
        .subscribe((data: any) => {
          console.log(data);
        });
      const addr: addresse = {
        pays: pays,
        ville: ville,
        codepostale: codepostale,
        add: add
      };
      this.utilisateurservice
        .addAdresseUTili(addr.pays, addr.ville, addr.codepostale, addr.add)
        .subscribe((data: any) => {
          console.log(data);
        });
    }
  }
}
