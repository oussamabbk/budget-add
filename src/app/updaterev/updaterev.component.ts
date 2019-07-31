import { Component, OnInit } from "@angular/core";
import { utilisateurservice } from "../shared/utilisateur.service";
import { DatePipe } from "@angular/common";
import { DepEtRevs } from "app/model/utilisateur.model";

@Component({
  selector: "app-updaterev",
  templateUrl: "./updaterev.component.html",
  styleUrls: ["./updaterev.component.scss"]
})
export class UpdaterevComponent implements OnInit {
  constructor(private utilisateurservice: utilisateurservice) {}

  da: Date;
  ca: string;
  de: String;
  ty: string;
  mo: number;
  DepEtRevs: [
    {
      id: string;
      date: Date;
      categorie: string;
      description: String;
      type: string;
      montant: number;
    }
  ];

  ngOnInit() {
    let Id = localStorage.getItem("key");
    this.utilisateurservice.getDepOuREv(Id).subscribe((res: any) => {
      //console.log(res);
      let x = res.json();
      this.da = x.date;
      this.ca = x.categorie;
      this.de = x.description;
      this.ty = x.type;
      this.mo = x.montant;
      console.log(
        this.da,
        this.ca,

        this.de,
        this.ty,
        this.mo
      );
    });
  }
  updateDep(date, categorie, type, description, montant) {
    const dep: DepEtRevs = {
      date: date,
      categorie: categorie,
      description: description,
      type: type,
      montant: montant
    };
    let Id = localStorage.getItem("key");
    let userId = localStorage.getItem("user_id");

    this.utilisateurservice
      .updatedep(Id, userId, date, categorie, type, description, montant)
      .subscribe((data: any) => console.log(data));
  }
}
