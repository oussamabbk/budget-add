
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
  }