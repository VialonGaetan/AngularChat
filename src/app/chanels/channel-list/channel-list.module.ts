import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ChanelListComponent } from "./channel-list.component";
import { ChannelModule } from "../channel";
import { MessageService } from "../../../shared/services";

@NgModule({
  declarations: [
    ChanelListComponent
  ],
  imports: [
    CommonModule,
    ChannelModule
  ],
  exports: [ChanelListComponent],
  providers: [MessageService]
})
export class ChannelListModule { }
