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
  constructor(private utilisateurservice: utilisateurservice) {}
  addresse: [
    {
      pays: string;
      ville: string;
      codepostale: number;
      add: string;
    }
  ];
  add: any;
  utilisateurs: [
    {
      email: string;
      bank: string;
      prenom: string;
      password: string;
      num: number;
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
        this.codepostale1 = y[0].code;
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
  updateUSer(email, nom, prenom, bank, num, tel) {
    this.utilisateurservice
      .updateUtlisateur(
        (email = email),
        (nom = nom),
        (prenom = prenom),
        (bank = bank),
        (num = num),
        (tel = tel)
      )
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
