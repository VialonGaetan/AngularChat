import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { MessageComponent, MessageListComponent } from "./messages";
import { ChannelComponent} from "./chanels";
import { MessageFormComponent } from "./message-form";
import { MessageService } from "../shared/services/message/message.service";
import { ChannelService } from "../shared/services/channel/channel.service";
import {UserService } from "../shared/services/user/user.service";
import {ChannelListComponent} from "./chanels/channel-list/channel-list.component";
import {ChannelFormComponent} from "./channel-form/channel-form.component";
import {PageComponent} from "./chanels/page/page.component";
import {UserListComponent} from "./users/user-list/user-list.component";
import {UserComponent} from "./users/user/user.component";
@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    MessageComponent,
    ChannelComponent,
    ChannelListComponent,
    ChannelFormComponent,
    PageComponent
    ChannelFormComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MessageService, ChannelService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
