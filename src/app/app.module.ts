import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { MessageComponent, MessageListComponent } from "./messages";
import { ChannelComponent} from "./chanels";
import { MessageFormComponent } from "./message-form";
import { MessageService } from "../shared/services/message/message.service";
import { ChannelService } from "../shared/services/channel/channel.service";
import {ChannelListComponent} from "./chanels/channel-list/channel-list.component";
import {ChannelFormComponent} from "./channel-form/channel-form.component";
import {ChatComponent} from "./chat/chat.component";

@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    MessageComponent,
    ChannelComponent,
    ChannelListComponent,
    ChannelFormComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'threads/:id',
        component: ChatComponent
      }
    ])
  ],
  providers: [MessageService, ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
