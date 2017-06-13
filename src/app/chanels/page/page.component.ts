import { Component, OnInit } from "@angular/core";

import { ChannelService } from "../../../shared/services";

@Component({
  selector: "app-page-selector",
  templateUrl: "page.component.html",
  styleUrls: ["page.component.css"]
})
export class PageComponent implements OnInit {

  private pageMax: number;
  constructor(private channelService: ChannelService) {
  }


  ngOnInit() {
    this.pageMax =  this.channelService.pageTotal;
  }
  setPage(chosen: number){
    this.channelService.changePageChannel(chosen);
  }
  range1(max: number) {
    let x = [];
    let i = 1;
    while (x.push(i++) < max) {};
    return x;
  }
}
