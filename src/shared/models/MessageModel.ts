/**
 * Classe représentant object Message
 * Cet objet est renvoyé grâce à l'url /threads/:id/messages avec :id un nombre entier représentant l'id d'un channel
 */
export class MessageModel {

  /**
   * Identifiant du channel.
   */
  public id: number;

  /**
   * Contenu du channel
   */
  public content: string;

  /**
   * Nom de la personne ayant envoyé le channel
   */
  public from: string;

  /**
   * Date de création du channel.
   */
  public createdAt: string;

  /**
   * Date de la mise à jour du channel. Si le channel n'a pas été mis à jour, par défaut la valeur sera la identique
   * à createdAt.
   */
  public updatedAt: string;

  /**
   * Identifiant de la thread
   */
  public threadId: number;

  constructor(id?: number, content?: string, from?: string, createdAt?: string, updatedAt?: string, threadId?: number) {
    this.id = id;
    this.content = content;
    this.from = from;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.threadId =  threadId;
  }
}
