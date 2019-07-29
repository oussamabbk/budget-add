import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MainLayoutRoutes } from "./main-layout.routing";
import { TimerComponent } from "../../timer/timer.component";
import { MyTasksComponent } from "../../my-tasks/my-tasks.component";
import { NgxPaginationModule } from "ngx-pagination";
import { TasksService } from "../../shared/task.service";
import { HttpModule } from "@angular/http";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { UpdaterevComponent } from "app/updaterev/updaterev.component";

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule
} from "@angular/material";
import { from } from "rxjs";
import { DepRevComponent } from "app/depetrevenu/dep-rev.component";

@NgModule({
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
    DepRevComponent,
    UpdaterevComponent
  ]
})
export class MainLayoutModule {}
