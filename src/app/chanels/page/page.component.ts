import { Component, OnInit } from "@angular/core";

import { ChannelService } from "../../../shared/services";

@Component({
  selector: "app-page-selector",
  templateUrl: "page.component.html"
})
/**
 * Composant qui affiche les différents boutons pour choisir les pages de channels à afficher
 */
export class PageComponent implements OnInit {

  private pageMax: number[];
  private page: number;
  constructor(private channelService: ChannelService) {
    this.page=0;
    this.pageMax = [];
  }

  /**
   * Lors de la création du composant, on met à jour directement les boutons selon le nombre de page maximum
   */
  ngOnInit() {
    this.channelService.pages.subscribe((max) => this.pageMax = max);
  }
  setPage(chosen: number) {
    this.page = chosen;
    this.channelService.changePageChannel(chosen);
  }
}
