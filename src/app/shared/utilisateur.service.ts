import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";

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
  updateUtlisateur(email, nom, prenom, bank, num, tel) {
    let userId = localStorage.getItem("user_id");

    let contentBody = JSON.stringify({
      id: userId,
      email: email,
      nom: nom,
      prenom: prenom,
      bank: bank,
      num: num,
      tel: tel
    });
    return this.http
      .post("http://localhost:3000/api/utilisateurs", contentBody, httpOptions)
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
}
/* this.taskService.addTask(task.description,task.starttime,task.endtime,task.timespent).subscribe(
      (res)=>{
          console.log(res);
          window.alert("Task successfully added!");
          location.reload();
      },*/
