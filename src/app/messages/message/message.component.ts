import {Component, Input, OnInit} from "@angular/core";
import {MessageModel} from "../../../shared/models/MessageModel";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {

  @Input() message: MessageModel;
  private hasYoutubeLink: boolean;
  private embedLink: string;

  constructor() {
    this.message = new MessageModel(0, "Hello!");
  }

  /**
   * Recherche les liens youtubes
   */
  ngOnInit() {
    this.hasYoutubeLink = this.message.content.indexOf("www.youtube.com/") !== -1;
    if (this.hasYoutubeLink) {
      console.log(this.message.content);
      const start: number = this.message.content.indexOf("=") + 1;
      let end: number = this.message.content.indexOf("\ ", start);
      if (end < 0) {
        end = this.message.content.length - 1;
      }
      this.embedLink = this.message.content.substr(start, end - start + 1);
    }
  }

  youtubeEmbed(): string {
    return this.embedLink;
  }
}
