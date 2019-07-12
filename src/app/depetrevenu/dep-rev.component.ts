import { Component, OnInit } from "@angular/core";
import { utilisateur } from "../model/utilisateur.model";
import { addresse } from "../model/utilisateur.model";
import { utilisateurservice } from "../shared/utilisateur.service";
import { balancePreviousStylesIntoKeyframes } from "@angular/animations/browser/src/util";
import { DepEtRevs } from "../model/utilisateur.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-dep-rev",
  templateUrl: "./dep-rev.component.html",
  styleUrls: ["./dep-rev.component.css"]
})
export class DepRevComponent implements OnInit {
  constructor(
    private utilisateurservice: utilisateurservice,
    private router: Router
  ) {}
  x: string;

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
  DepEtRevs: [
    {
      date: Date;
      categorie: string;
      description: String;
      type: string;
      montant: number;
    }
  ];
  dep: any;

  ngOnInit() {
    this.x = localStorage.getItem("DepOuRev");
  }
  ajouterDep(date, categorie, description, type, montant) {
    const dep: DepEtRevs = {
      date: date,
      categorie: categorie,
      description: description,
      type: type,
      montant: montant
    };
    this.utilisateurservice
      .ajouterDepEtRev(
        dep.date,
        dep.categorie,
        dep.description,
        dep.type,
        dep.montant
      )
      .subscribe(
        (res: any) => {
          console.log(res);

          window.alert("information enregistre");
          location.reload();
        },
        error => {
          alert("erreur");
        }
      );
  }
}
