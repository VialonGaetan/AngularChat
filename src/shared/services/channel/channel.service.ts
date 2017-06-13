import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {ChannelModel} from "../../models/ChannelModel";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {THREADSERVER, URLSERVER} from "shared/constants/urls";
import {_if} from "rxjs/observable/if";
import {error} from "util";

@Injectable()
export class ChannelService {

  /**
   * Url pour accéder aux données. L'url est commun à toutes les fonctions du service.
   * Il permet d'accéder aux channels. À partir de cet url, vous pourrez accéder aux messages.
   * La documentation des methodes du service permet d'avoir plus d'information concernant la façon d'accèder aux messages.
   */
  private url: string;
  private urlThread: string;
  private page: number;
  public pages: ReplaySubject<number[]>;
  private pageMax: number;
  public channelList$: ReplaySubject<ChannelModel[]>;

  constructor(private http: Http) {
    this.page = 0;
    this.url = URLSERVER;
    this.urlThread = THREADSERVER;
    this.pages = new ReplaySubject();
    this.channelList$ = new ReplaySubject(1);
    this.channelList$.next([new ChannelModel(0)]);
    this.startSearch();
  }

  /**
   * Fonction getChannel.
   * Cette fonction permet de récupérer la liste des channels disponibles.
   * @returns {Observable<R>}
   */
  public getChanel() {
    this.http.get(this.urlThread + this.page)
      .subscribe((response) => this.extractAndUpdateChanelList(response));
  }

  extractAndUpdateChanelList(response: Response) {
    // Plus d'info sur Response ou sur la fonction .json()? si tu utilises Webstorm,
    // fait CTRL + Click pour voir la déclaration et la documentation
    const chanelList = response.json() || []; // ExtractMessage: Si response.json() est undefined ou null,
    // chanelList prendra la valeur tableau vide: [];
    this.channelList$.next(chanelList); // On pousse les nouvelles données dans l'attribut messageList$
  }


  public createChannel(name: string) {
    this.http.post(this.url, {"name": name}).subscribe((e) => this.extractChannelAndGetChannel(e));
  }


  public deleteChannel(threadId: number) {
    this.http.delete(this.url + "/" + threadId).subscribe((e) => this.getChanel());
  }

  private extractChannelAndGetChannel(response: Response): ChannelModel {
    this.getChanel();
    return response.json() || [];
  }

  public changePageChannel(page: number) {
    this.page = page;
    this.computePage(page);
    this.getChanel();
  }

  public getCurrentPAge(): number {
    return this.page;
  }

  public startSearch() {
    this.searchLastPage(0);
  }

  public range1(max: number) {
    let x = [];
    let i = 0;
    while (x.push(i++) < max) {
    }
    ;
    return x;
  }

  public searchLastPage(i: number) {
    this.http.get(this.urlThread + i).subscribe((response) => {
      if (response.json().length < 20) {
        this.pageMax = i - 1;
        this.computePage(this.page);
      } else {
        this.searchLastPage(i + 1);
      }
    });
  }

  private computePage(page: number) {
    if (page <= 2) {
      this.pages.next(this.range1(4).concat(this.pageMax));
    } else if (page <= this.pageMax - 2) {
      this.pages.next([0, page - 1, page, page + 1, this.pageMax]);
    } else {
      this.pages.next([0, this.pageMax - 3, this.pageMax - 2, this.pageMax - 1, this.pageMax]);
    }
  }


}
