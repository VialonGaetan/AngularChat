/**
 * Classe représentant l'objet Chanel
 * Cet objet est renvoyé grâce à l'url /threads.
 */
export class ChanelModel {

  /**
   * Identifiant du chanels.
   */
  public id: number;

  /**
   * Nom du chanels
   */
  public name: string;

  /**
   * Date de creation du chanels.
   */
  public createdAt: string;

  /**
   * Date à laquelle le chanels a eu la dernière modification.
   */
  public updatedAt: string;

  constructor(id: number, name?: string, createdAt?: string, updatedAt?: string) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
