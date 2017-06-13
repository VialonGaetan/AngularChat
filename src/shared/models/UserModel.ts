/**
 * Classe représentant l'objet User
 * Cet objet est renvoyé grâce à l'url /users.
 */
export class UserModel {
    /**
   * Nom du user
   */
  public name: string;

  constructor(name?: string) {
    this.name = name;
  }
}
