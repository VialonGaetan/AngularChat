import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PageComponent } from "./page.component";
import {ChannelService} from "../../../shared/services/channel/channel.service";

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [PageComponent],
  providers: [ChannelService]
})
export class PageModule { }
