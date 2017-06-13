import { Component, Input, OnInit } from "@angular/core";


import {UserService} from "../../../shared/services/user/user.service";
import {UserModel} from "../../../shared/models/UserModel";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {

  @Input() user: UserModel;

  constructor(private userService: UserService) {
    this.user = new UserModel();
  }
  /**
   * Fonction ngOnInit.
   * Cette fonction est appelée après l'execution de tous les constructeurs de toutes les classes typescript.
   * Cette dernière s'avère très utile lorsque l'on souhaite attendre des valeurs venant de d'autres composants.
   * Notre composant qui prend en @Input un channel. Les @Input ne sont accessibles uniquement à partir du ngOnInit,
   * pas dans le constructeur. Si vous souhaitez manipuler votre channel lors du chargement du composant, vous devez
   * le faire dans le ngOnInit.
   */
  ngOnInit() { }
}
