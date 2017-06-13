import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {UserModel} from "../../models/UserModel";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {URLSERVER, URLUSERS} from "shared/constants/urls";

@Injectable()
export class UserService {

  /**
   * Url pour accéder aux données. L'url est commun à toutes les fonctions du service.
   * Il permet d'accéder aux channels. À partir de cet url, vous pourrez accéder aux messages.
   * La documentation des methodes du service permet d'avoir plus d'information concernant la façon d'accèder aux messages.
   */
  private url: string;

  public userList$: ReplaySubject<UserModel[]>;

  constructor(private http: Http) {
    this.url = URLUSERS;
    this.userList$ = new ReplaySubject(1);
    this.userList$.next([new UserModel()]);
  }

  /**
   * Fonction getUsers.
   * Cette fonction permet de récupérer la liste des utilisateurs . Elle prend en parametre:
   * - route: La route. C'est la fin de l'url. Elle sera concaténée à l'attribut this.url pour former l'url complète.   *
   * Exemple de route: 1/messages
   * @returns {Observable<R>}
   */
  public getUsers() {
    this.http.get(this.url)
      .subscribe((response) => this.extractAndUpdateUserList(response));
  }

  extractAndUpdateUserList(response: Response) {
    // Plus d'info sur Response ou sur la fonction .json()? si tu utilises Webstorm,
    // fait CTRL + Click pour voir la déclaration et la documentation
    const userList = response.json() || []; // ExtractMessage: Si response.json() est undefined ou null,
    // messageList prendra la valeur tableau vide: [];
    this.userList$.next(userList); // On pousse les nouvelles données dans l'attribut userList$
  }
}
