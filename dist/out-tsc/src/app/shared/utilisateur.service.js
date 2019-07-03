var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from 'rxjs/operators';
// headers
var httpOptions = {
    headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
};
var utilisateurservice = /** @class */ (function () {
    function utilisateurservice(http) {
        this.http = http;
    }
    //find utilisateur par email
    utilisateurservice.prototype.findUtilisateur = function (searchemail, searchpassword) {
        return this.http.get('http://localhost:3000/api/utilisateurs?filter[where][email]=' + searchemail + '&filter[where][password]=' + searchpassword, httpOptions)
            .pipe(map(function (res) { return res; }));
    };
    utilisateurservice = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], utilisateurservice);
    return utilisateurservice;
}());
export { utilisateurservice };
//# sourceMappingURL=utilisateur.service.js.map