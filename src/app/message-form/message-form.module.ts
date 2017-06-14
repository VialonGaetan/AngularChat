import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MessageFormComponent } from "./message-form.component";
import { MessageService } from "../../shared/services/message/message.service";
import {WeatherService} from "../../shared/services/weather/weather.service";
import {TranslateService} from "../../shared/services/translate/translate.service";

@NgModule({
  declarations: [
    MessageFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MessageFormComponent],
  providers: [MessageService,WeatherService,TranslateService]
})
export class MessageFormModule { }
