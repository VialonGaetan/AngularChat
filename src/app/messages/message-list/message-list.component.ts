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
      if (!this.historyAsked) {
        this.messageService.getMessages(this.rte);
      }
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
    if (this.historyAsked) {
      this.historyAsked = false;
      this.addHistory(messages);
    }
    if (this.modified) {
      this.modified = false;
      this.messageList = messages.reverse();
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
        this.messageList = this.messageList.concat(news.reverse());
        break;
      }
    }
  }

  private addHistory(messages: MessageModel[]) {

    let first;
    first = this.messageList[0];
    let tab = [];
    for (let i = 0; i < messages.length; i++) {
      if (first.id != messages[i].id) {
        tab = [messages[i]].concat(tab);
      }
    }

    this.messageList = tab.concat(this.messageList);

  }
}

