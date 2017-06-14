import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {UserModel} from "../../models/UserModel";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {APIKEYWEATHER, URLSERVER, URLUSERS, URLWEATHER} from "shared/constants/urls";
import {WeatherModel} from "../../models/WeatherModel";

@Injectable()
export class WeatherService {

  private url: string;
  private key: string;

  public weather$: ReplaySubject<WeatherModel>;

  constructor(private http: Http) {
    this.url = URLWEATHER;
    this.key = APIKEYWEATHER;
    this.weather$ = new ReplaySubject(1);
  }

  public getWeather(city: string) {
    this.http.get(this.url + city + this.key)
      .subscribe((response) => this.extractWeather(response));
  }

  private extractWeather(response: Response) {
    this.weather$.next(new WeatherModel(response.json().name,response.json().weather[0].description,response.json().main.temp,response.json().main.humidity,response.json().main.pressure));
  }
}
