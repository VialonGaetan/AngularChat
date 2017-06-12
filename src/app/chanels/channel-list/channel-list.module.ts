import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ChannelListComponent } from "./channel-list.component";
import { ChannelModule } from "../channel";
import { MessageService } from "../../../shared/services";

@NgModule({
  declarations: [
    ChannelListComponent
  ],
  imports: [
    CommonModule,
    ChannelModule
  ],
  exports: [ChannelListComponent],
  providers: [MessageService]
})
export class ChannelListModule { }
