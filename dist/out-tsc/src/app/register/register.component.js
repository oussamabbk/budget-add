var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import * as EmailValidator from "email-validator";
import { Router } from "@angular/router";
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
        this.nom = "ecrire votre nom ici";
        this.motdepasse = "mot de passe";
        this.veremail = "ecrire votre email";
        this.nombank = "ecrire nom de votre bank";
        this.numcompte = "ecrire numero de votre compte";
        this.designeerreur = true;
        this.designName = true;
        this.designEmail = true;
        this.designemdp = true;
        this.designebank = true;
        this.designenum = true;
        this.z = 0;
        this.email1 = "";
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.aftercheked = function () {
        this.nom = "";
    };
    RegisterComponent.prototype.afterchekedmdp = function () {
        this.motdepasse = null;
    };
    RegisterComponent.prototype.afterchekedemail = function () {
        this.veremail = "";
    };
    RegisterComponent.prototype.afterchekedbank = function () {
        this.nombank = "";
    };
    RegisterComponent.prototype.afterchekednum = function () {
        this.numcompte = "";
    };
    RegisterComponent.prototype.verifcheck = function (z) {
        z++;
    };
    RegisterComponent.prototype.verif = function (naa, mdp1, mdp2, email1, nomb, num, designeerreur) {
        var y = 0;
        if (naa == "") {
            this.nom = "ecrire votre nom";
            y++;
            this.designName = false;
            console.log(designeerreur);
        }
        else {
            this.designeerreur = true;
        }
        if (mdp1 != mdp2 || mdp1 == "") {
            this.motdepasse = "verifier votre mot de passe";
            y++;
            this.designeerreur = false;
            this.designemdp = false;
        }
        if (EmailValidator.validate(email1) != true) {
            this.veremail = "email Invalide";
            this.designEmail = false;
            console.log(designeerreur);
            y++;
            designeerreur = false;
            console.log(designeerreur);
        }
        if (nomb == "") {
            this.nombank = "ecrire nom de votre bank";
            y++;
            this.designeerreur = false;
            this.designebank = false;
            console.log(designeerreur);
        }
        var re = new RegExp("^[0-9]*$");
        var x = num.toString();
        if (!re.test(x) || num == "") {
            this.numcompte = " ecrire numero de votre compte";
            y++;
            this.designenum = false;
            this.designeerreur = false;
            console.log(designeerreur);
        }
        if (y == 0 && this.z == 0) {
            this.router.navigate(["/dashboard"]);
        }
        else {
            console.log(designeerreur);
        }
    };
    RegisterComponent = __decorate([
        Component({
            selector: "app-register",
            templateUrl: "./register.component.html",
            styleUrls: ["./register.component.css"]
        }),
        __metadata("design:paramtypes", [Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map