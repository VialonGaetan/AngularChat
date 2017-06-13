import {Component, Input, OnInit} from "@angular/core";

import { MessageService } from "../../shared/services";
import { MessageModel } from "../../shared/models/MessageModel";

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"]
})
export class MessageFormComponent implements OnInit {

  public message: MessageModel;
  @Input() route: string;
  @Input() id: number;

  constructor(private messageService: MessageService) {
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
    console.log("[message-form] route: "+this.route);
    console.log("[message-form] id: "+this.id);
    this.messageService.sendMessage(this.route, this.message);
  }
}
