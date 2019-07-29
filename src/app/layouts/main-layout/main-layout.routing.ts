import { Routes } from "@angular/router";

import { TimerComponent } from "../../timer/timer.component";
import { MyTasksComponent } from "../../my-tasks/my-tasks.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { DepRevComponent } from "app/depetrevenu/dep-rev.component";
import { UpdaterevComponent } from "app/updaterev/updaterev.component";

export const MainLayoutRoutes: Routes = [
  { path: "timer", component: TimerComponent },
  { path: "my-tasks", component: MyTasksComponent },
  { path: "Profil", component: UserProfileComponent },
  { path: "dep-rev", component: DepRevComponent },
  { path: "Updatedep", component: UpdaterevComponent }
];
