import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ChanelListComponent } from "./chanel-list.component";
import { ChanelModule } from "../chanel";
import { MessageService } from "../../../shared/services";

@NgModule({
  declarations: [
    ChanelListComponent
  ],
  imports: [
    CommonModule,
    ChanelModule
  ],
  exports: [ChanelListComponent],
  providers: [MessageService]
})
export class MessageListModule { }
