/*import { Component, OnInit } from '@angular/core';

declare interface Routing {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: Routing[] = [
    { path: '/timer', title: 'Timer',  icon:'dashboard', class: '' },
    { path: '/my-tasks', title: 'My Tasks',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}*/
import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/timer', title: 'acceuil',  icon: 'dashboard', class: '' },
    { path: '/Profil', title: 'Profile',  icon:'person', class: '' },
    { path: '/my-tasks', title: 'historique',  icon:'content_paste', class: '' },
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

