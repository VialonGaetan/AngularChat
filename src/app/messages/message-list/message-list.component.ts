import {Component, Input, OnInit} from "@angular/core";
import {MessageService} from "../../../shared/services";
import {MessageModel} from "../../../shared/models/MessageModel";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"]
})
export class MessageListComponent implements OnInit {
  public historyLoaded: number;
  private historyAsked: boolean;
  private modified: boolean;
  public messageList: MessageModel[];
  private rte: string;
  @Input() route: ReplaySubject<string>;

  private reload_loop() {
    setInterval(() => {
      this.messageService.getMessages(this.rte);
    }, 1000);
  }

  constructor(private messageService: MessageService) {
    this.historyLoaded = 0;
  }

  loadMoreHistory() {
    this.historyLoaded++;
    this.historyAsked = true;
    this.messageService.getMessages(this.rte + "?page=" + this.historyLoaded);
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
    this.route.subscribe((route) => {
      this.rte = route;
      this.modified = true;
      this.messageService.getMessages(route);
    });
    this.reload_loop();
    this.messageService.messageList$.subscribe((messages) => this.addNew(messages));
  }

  private addNew(messages: MessageModel[]) {
    if(this.historyAsked) {
      this.historyAsked = false;
      console.log("historique demandé");
      this.addHistory(messages);
    }
    if (this.modified) {
      this.modified = false;
      this.messageList = messages.reverse();
      console.log("R",messages.length);
      return;
    }
    if ((typeof this.messageList) == "undefined") {
      this.messageList = messages.reverse();
      return;
    }
    let last;
    last = this.messageList[this.messageList.length - 1];
    let news = [];
    for (let i = 0; i < messages.length; i++) {
      if (last.id !== messages[i].id) {
        news = news.concat([messages[i]]);
      } else {
        console.log(news.length,"Ajoutés !");
        this.messageList = this.messageList.concat(news.reverse());
        break;
      }
    }
  }

  private addHistory(messages: MessageModel[]) {

    let first;
    first = this.messageList[0];
    console.log("Plus ancien actuellement affiché:"+first.content);
    let tab = [];
    for (let i = 0; i < messages.length; i++) {
      if(first.id != messages[i].id){
        console.log("ajout",messages[i].content);
          tab = [messages[i]].concat(tab);
      }
    }

    this.messageList = tab.concat(this.messageList);

  }
}

