var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { utilisateurservice } from '../shared/utilisateur.service';
import { TasksService } from 'app/shared/task.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(utilisateurservice, tasekservice) {
        this.utilisateurservice = utilisateurservice;
        this.tasekservice = tasekservice;
        //this.verifUtilisateur();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.verifUtilisateur = function (e, p) {
        var _this = this;
        console.log(this.utilisateurservice.findUtilisateur(e, p));
        this.utilisateurservice.findUtilisateur(e, p).subscribe(function (data) {
            console.log(data);
            _this.user = data._body;
            console.log(_this.user);
            //data.email
            console.log(_this.user.password);
        });
        //this.utilisateurservice.findUtilisateur(this.)
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [utilisateurservice, TasksService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map