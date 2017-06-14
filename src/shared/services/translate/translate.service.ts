import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {UserModel} from "../../models/UserModel";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {APIKEYWEATHER, URLSERVER, URLTRANSLATE, URLUSERS, URLWEATHER} from "shared/constants/urls";
import {WeatherModel} from "../../models/WeatherModel";
import {TranslateModel} from "../../models/TranslateModel";

@Injectable()
export class TranslateService {

  private url: string;

  public translate$: ReplaySubject<TranslateModel>;

  constructor(private http: Http) {
    this.url = URLTRANSLATE;
    this.translate$ = new ReplaySubject(1);
  }

  public getTranslation(from: string, to: string, text:string) {
    this.http.get(this.url + "text=" + text + "&to=" + to + "&from=" + from)
      .subscribe((response) => this.translate$.next(this.extractTranslation(response)));
  }

  private extractTranslation(response: Response) : TranslateModel {
    return new TranslateModel(response.json().translationText);
  }
}
