
import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";
import { map } from 'rxjs/operators';

// headers
const httpOptions = {
    headers: new Headers({
      'Accept':  'application/json',
      'Content-Type': 'application/json'
    })
};

@Injectable()
export class utilisateurservice{
    constructor(private http:Http){}
    //find utilisateur par email
    findUtilisateur(searchemail,searchpassword){
      return this.http.get('http://localhost:3000/api/utilisateurs?filter[where][email]='+searchemail+'&filter[where][password]='+searchpassword,httpOptions)
      .pipe(map(res =>  res));
      
  
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
    addutilisateur(email,nom,bank,password,num){
      
      let contentBody = JSON.stringify({
        "email": email,
        "nom": nom,
        "bank": bank,
        "password": password,
        "num":num
        
    });
    return this.http.post('http://localhost:3000/api/utilisateurs',contentBody,httpOptions)
      .pipe(map(res =>  res));
    
  }
    
  }
  /* this.taskService.addTask(task.description,task.starttime,task.endtime,task.timespent).subscribe(
      (res)=>{
          console.log(res);
          window.alert("Task successfully added!");
          location.reload();
      },*/