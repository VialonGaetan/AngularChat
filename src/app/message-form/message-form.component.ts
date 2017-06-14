import {Component, Input, OnInit} from "@angular/core";

import { MessageService } from "../../shared/services";
import { MessageModel } from "../../shared/models/MessageModel";
import {WeatherService} from "../../shared/services/weather/weather.service";
import {TranslateService} from "../../shared/services/translate/translate.service";

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"]
})
export class MessageFormComponent implements OnInit {

  public message: MessageModel;
  private valeur :string[];
  @Input() route: string;
  @Input() id: number;

  constructor(private messageService: MessageService, private weatherService : WeatherService, private translateService : TranslateService) {
    this.message = new MessageModel(this.id, "Hello", "moi");
  }

  ngOnInit() {
    this.weatherService.weather$.subscribe((weather) => {
      this.messageService.sendMessage(this.route,new MessageModel(this.id, weather.printWeather(), "moobot"));
    });

    this.translateService.translate$.subscribe((translation) => {
      this.messageService.sendMessage(this.route,new MessageModel(this.id, translation.printTrad(), "translatebot"));
    });


  }

  /**
   * Fonction pour envoyer un message.
   * L'envoi du message se fait à travers la methode sendMessage du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un message (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le message à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  sendMessage() {
    if ((this.valeur = /(\/meteo\s)(.*)/g.exec(this.message.content.toLowerCase()))!= null){
      this.weatherService.getWeather(this.valeur[2].replace(" ",""));
    }
    if((this.valeur = /(\/traduction\s)(\w*\s)(\w*\s)(.*)/g.exec(this.message.content.toLowerCase()))!= null){
      this.translateService.getTranslation(this.valeur[2],this.valeur[3],this.valeur[4]);
    }
    this.messageService.sendMessage(this.route, this.message);
  }
}
