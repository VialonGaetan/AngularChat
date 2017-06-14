import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from "@angular/router";


import {ChannelModel} from "../../shared/models/ChannelModel";

import 'rxjs/add/operator/switchMap';
import {ReplaySubject} from "rxjs/ReplaySubject";

@Component({
  selector: "app-chat",
  templateUrl: "chat.component.html",
  styleUrls: [ "chat.component.css" ]
})

export class ChatComponent implements OnInit{

  public route: string;
  public routeObservable: ReplaySubject<string>;
  public id: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.routeObservable = new ReplaySubject();
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe(id => {
        this.route = id+"/messages";
        this.routeObservable.next(this.route);
        this.id = id;
      });
  }

}
