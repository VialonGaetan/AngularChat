import {Component, Input, OnInit} from "@angular/core";

import { MessageService } from "../../shared/services";
import { MessageModel } from "../../shared/models/MessageModel";
import {WeatherService} from "../../shared/services/weather/weather.service";
import {WeatherModel} from "../../shared/models/WeatherModel";

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"]
})
export class MessageFormComponent implements OnInit {

  public message: MessageModel;
  @Input() route: string;
  @Input() id: number;

  constructor(private messageService: MessageService, private weatherService : WeatherService) {
    this.message = new MessageModel(this.id, "Hello", "moi");
  }

  ngOnInit() { }

  /**
   * Fonction pour envoyer un message.
   * L'envoi du message se fait à travers la methode sendMessage du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un message (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le message à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  sendMessage() {
    if (this.message.content.split(" ")[0].toLowerCase().search("/meteo") != -1){
      this.weatherService.getWeather(this.message.content.split(" ")[1]);
      this.weatherService.weather$.subscribe((weather) => {
        this.messageService.sendMessage(this.route,new MessageModel(this.id + 1, weather.printWeather(), "bot"));
      });
    }
    this.messageService.sendMessage(this.route, this.message);
  }
}
