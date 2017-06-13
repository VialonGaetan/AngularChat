import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { UserListComponent } from "./user-list.component";
import { UserService } from "../../../shared/services/user/user.service";

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [UserListComponent],
  providers: [UserService]
})
export class UserListModule { }
