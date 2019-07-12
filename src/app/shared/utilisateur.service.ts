import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";
import { EmailValidator } from "@angular/forms";

// headers
const httpOptions = {
  headers: new Headers({
    Accept: "application/json",
    "Content-Type": "application/json"
  })
};

@Injectable()
export class utilisateurservice {
  constructor(private http: Http) {}
  //find utilisateur par email
  findUtilisateur(searchemail, searchpassword) {
    return this.http
      .get(
        "http://localhost:3000/api/utilisateurs?filter[where][email]=" +
          searchemail +
          "&filter[where][password]=" +
          searchpassword,
        httpOptions
      )
      .pipe(
        map(res => {
          let x = res.json();
          localStorage.setItem("user_id", x[0].id);
        })
      );
  }
  SearchParId(user_id) {
    user_id = localStorage.getItem("user_id");
    return this.http
      .get(
        "http://localhost:3000/api/utilisateurs?filter[where][id]=" + user_id,
        httpOptions
      )
      .pipe(map(res => res));
  }
  /*
    findUtilisateur(searchemail){
      if(this.http.get('http://localhost:3000/api/utilisateurs?filter[where][email]='+searchemail,httpOptions)){
        return true
      }
      else {
        return false
      }
      
    }*/
  findadutili(ID) {
    return this.http
      .get("http://localhost:3000/api/adresses/" + ID, httpOptions)
      .pipe(map(res => res));
  }
  addutilisateur(email, nom, bank, password, num) {
    let contentBody = JSON.stringify({
      email: email,
      nom: nom,
      bank: bank,
      password: password,
      num: num
    });
    return this.http
      .post("http://localhost:3000/api/utilisateurs", contentBody, httpOptions)
      .pipe(map(res => res));
  }
  updateUtlisateur(email, nom, prenom, password, bank, num, tel) {
    let pass = "aaa";
    let userId = localStorage.getItem("user_id");
    this.http
      .get("http://localhost:3000/api/adresses/" + userId, httpOptions)
      .pipe(
        map(res => {
          let x = res.json();
          pass = x[0].email;
        })
      );

    console.log(userId);
    console.log("aaaa", pass);

    let contentBody = JSON.stringify({
      email: email,
      nom: nom,
      prenom: prenom,
      bank: bank,
      password: password,
      num: num,
      tel: tel
    });
    console.log(userId);
    return this.http
      .put(
        "http://localhost:3000/api/utilisateurs/" + userId,
        contentBody,
        httpOptions
      )
      .pipe(map(res => res));
  }
  getAddresseUtlili(ID) {
    return this.http
      .get(
        "http://localhost:3000/api/utilisateurs/" + ID + "/addresse",
        httpOptions
      )
      .pipe(map(res => res));
  }
  addAdresseUTili(pays, ville, codepostale, add) {
    let contentBody = JSON.stringify({
      pays: pays,
      ville: ville,
      codepostale: codepostale,
      add: add
    });
    let userId = localStorage.getItem("user_id");

    return this.http
      .post(
        "http://localhost:3000/api/utilisateurs/" + userId + "/addresse",
        contentBody,
        httpOptions
      )
      .pipe(map(res => res));
  }
  ajouterDepEtRev(date, categorie, description, type, montant) {
    let contentBody = JSON.stringify({
      date: date,
      categorie: categorie,
      description: description,
      type: type,
      montant: montant
    });
    let userId = localStorage.getItem("user_id");
    return this.http
      .post(
        "http://localhost:3000/api/utilisateurs/" + userId + "/dep-rev",
        contentBody,
        httpOptions
      )
      .pipe(map(res => res));
  }
  findDepEtRev(ID) {
    return this.http
      .get(
        "http://localhost:3000/api/utilisateurs/" + ID + "/dep-rev",
        httpOptions
      )
      .pipe(map(res => res));
  }
}
/* this.taskService.addTask(task.description,task.starttime,task.endtime,task.timespent).subscribe(
      (res)=>{
          console.log(res);
          window.alert("Task successfully added!");
          location.reload();
      },*/
