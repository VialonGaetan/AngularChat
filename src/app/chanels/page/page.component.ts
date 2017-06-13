import { Component, OnInit } from "@angular/core";

import { ChannelService } from "../../../shared/services";

@Component({
  selector: "app-page-selector",
  templateUrl: "page.component.html",
  styleUrls: ["page.component.css"]
})
export class PageComponent implements OnInit {

  private pageMax: number;
  // Nombre de page maximum
  constructor(private channelService: ChannelService) {
  }

  ngOnInit() {
    // TODO : set le nombre de page maximum
    //this.pageMax;
  }

  range1(i: number){
    var x = [];
    var i =1;
    while(x.push(i++)<i){};
    return x}
}
