import { Component, OnInit } from "@angular/core";
import { utilisateurservice } from "../shared/utilisateur.service";
import { TasksService } from "app/shared/task.service";
import { Router } from "@angular/router";

import "rxjs/add/operator/map";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  a = true;
  b = true;

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

  constructor(
    private utilisateurservice: utilisateurservice,
    private tasekservice: TasksService,
    private router: Router
  ) {
    //this.verifUtilisateur();
  }

  ngOnInit() {}

  verifUtilisateur(e, p) {
    this.utilisateurservice.findUtilisateur(e, p).subscribe((data: any) => {
      let userId = localStorage.getItem("user_id");
      console.log(userId);

      if (userId.length !== 0) {
        this.router.navigate(["/timer"]);
      } else {
        this.a = false;
        this.b = false;
      }
    });
  }

  gotoregister() {
    this.router.navigate(["/register"]);
  }
}
