var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainLayoutRoutes } from './main-layout.routing';
import { TimerComponent } from '../../timer/timer.component';
import { MyTasksComponent } from '../../my-tasks/my-tasks.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpModule } from '@angular/http';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule } from '@angular/material';
var MainLayoutModule = /** @class */ (function () {
    function MainLayoutModule() {
    }
    MainLayoutModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(MainLayoutRoutes),
                FormsModule,
                MatButtonModule,
                MatRippleModule,
                MatInputModule,
                MatTooltipModule,
                NgxPaginationModule,
                HttpModule
            ],
            declarations: [
                TimerComponent,
                MyTasksComponent,
                UserProfileComponent,
            ]
        })
    ], MainLayoutModule);
    return MainLayoutModule;
}());
export { MainLayoutModule };
//# sourceMappingURL=main-layout.module.js.map