import {Component, Input, OnInit} from "@angular/core";

import { MessageService } from "../../../shared/services";
import { MessageModel } from "../../../shared/models/MessageModel";

import {ReplaySubject} from "rxjs/ReplaySubject";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"]
})
export class MessageListComponent implements OnInit {

  public messageList: MessageModel[];
  @Input() route: ReplaySubject<string>;

  constructor(
    private messageService: MessageService,
  ) {

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
    this.route.subscribe((route) => this.messageService.getMessages(route));
    this.messageService.messageList$.subscribe((messages) => this.messageList = messages);
  }

}
