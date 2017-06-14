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
import {UserService } from "../shared/services/user/user.service";
import {ChannelListComponent} from "./chanels/channel-list/channel-list.component";
import {ChannelFormComponent} from "./channel-form/channel-form.component";
import {ChatComponent} from "./chat/chat.component";

import {PageComponent} from "./chanels/page/page.component";
import {UserListComponent} from "./users/user-list/user-list.component";
import {UserComponent} from "./users/user/user.component";
import {WeatherService} from "../shared/services/weather/weather.service";
@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    MessageComponent,
    ChannelComponent,
    ChannelListComponent,
    ChannelFormComponent,
    PageComponent,
    ChannelFormComponent,
    UserListComponent,
    UserComponent,
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
  providers: [MessageService, ChannelService, UserService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
