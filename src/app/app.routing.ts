import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { from } from "rxjs";

const routes: Routes = [
  {
    path: "",
    redirectTo: "timer",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/main-layout/main-layout.module#MainLayoutModule"
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
