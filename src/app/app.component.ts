import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "app.component.css", "../shared/styles/fill.css" ]
})
export class AppComponent {

  public title: string;

  constructor() {
    this.title = "Chat";
    Observable.create();

  }
}
