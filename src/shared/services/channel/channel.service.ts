import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {ChannelModel} from "../../models/ChannelModel";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {URLSERVER} from "shared/constants/urls";

@Injectable()
export class ChannelService {

  /**
   * Url pour accéder aux données. L'url est commun à toutes les fonctions du service.
   * Il permet d'accéder aux channels. À partir de cet url, vous pourrez accéder aux messages.
   * La documentation des methodes du service permet d'avoir plus d'information concernant la façon d'accèder aux messages.
   */
  private url: string;

  public channelList$: ReplaySubject<ChannelModel[]>;

  constructor(private http: Http) {
    this.url = URLSERVER;
    this.channelList$ = new ReplaySubject(1);
    this.channelList$.next([new ChannelModel(0)]);
  }

  /**
   * Fonction getMessage.
   * Cette fonction permet de récupérer la liste des messages pour un channel donné. Elle prend en parametre:
   * - route: La route. C'est la fin de l'url. Elle sera concaténée à l'attribut this.url pour former l'url complète.
   *          Pour l'envoie des messages la route doit avoir la structure suivante: :id/messages avec ":id" étant
   *          un nombre entier correspondant à l'identifiant (id) du channel.
   * Exemple de route: 1/messages
   * @param route
   * @returns {Observable<R>}
   */
  public getChanel() {
       this.http.get(this.url)
      .subscribe((response) => this.extractAndUpdateChanelList(response));
  }

  extractAndUpdateChanelList(response: Response) {
    // Plus d'info sur Response ou sur la fonction .json()? si tu utilises Webstorm,
    // fait CTRL + Click pour voir la déclaration et la documentation
    const chanelList = response.json() || []; // ExtractMessage: Si response.json() est undefined ou null,
    // messageList prendra la valeur tableau vide: [];
    this.channelList$.next(chanelList); // On pousse les nouvelles données dans l'attribut messageList$
  }


  public createChannel(name: string) {
    this.http.post(this.url, {"name": name}).subscribe((e) => this.extractChannelAndGetChannel(e));
  }


  public deleteChannel(threadId: number) {
    this.http.delete(this.url, threadId);
    this.getChanel();
  }

  private extractChannelAndGetChannel(response: Response): ChannelModel {
    this.getChanel();
    return response.json() || [];
  }
}
