import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../../shared/services";
import { MessageModel } from "../../../shared/models/MessageModel";
import {ChannelModel} from "../../../shared/models/ChannelModel";
import {ChannelService} from "../../../shared/services/channel/channel.service";

@Component({
  selector: "app-channel-list",
  templateUrl: "channel-list.component.html",
  styleUrls: ["channel-list.component.css"]
})
export class ChannelListComponent implements OnInit {

  public chanelList: ChannelModel[];

  constructor(private chanelService: ChannelService) {
  }

  /**
   * Fonction ngOnInit.
   * Cette fonction est appelée après l'execution de tous les constructeurs de toutes les classes typescript.
   * Cette dernière s'avère très utile lorsque l'on souhaite attendre des valeurs venant de d'autres composants.
   * Le composant MessageComponent prend en @Input un channel. Les @Input ne sont accessibles uniquement à partir du ngOnInit,
   * pas dans le constructeur.
   * En general, l'utilisation des services dans le NgOnInit est une bonne practice. Le constructeur ne doit servir qu'à
   * l'initialisation simple des variables. Pour plus d'information sur le ngOnInit, il y a un lien dans le README.
   */
  ngOnInit() {
    this.chanelService.getChanel();
    this.chanelService.channelList$.subscribe((chanel) => this.chanelList = chanel);
  }

}
