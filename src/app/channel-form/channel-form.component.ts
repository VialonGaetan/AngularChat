import {Component, OnInit} from "@angular/core";
import {ChannelService} from "../../shared/services/channel/channel.service";

@Component({
  selector: "app-channel-form",
  templateUrl: "channel-form.component.html",
  styleUrls: ["channel-form.component.css"]
})
export class ChannelFormComponent implements OnInit {

  private nom: string;
  constructor(private channelService: ChannelService) {
    this.nom = "Nouveau channel";
  }

  ngOnInit() { }

  /**
   * Fonction pour envoyer un channel.
   * L'envoi du channel se fait à travers la methode createChannel du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un channel (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le channel à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  createChannel() {
    console.log("Click!", this.nom);
    this.channelService.createChannel(this.nom);
    // this.router.navigate('/')
   // this.channelService.createChannel(this.route, this.channel);
  }
}
