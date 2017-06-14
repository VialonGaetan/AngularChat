export class TranslateModel {

  public translation: string;

  constructor(translation: string) {
    this.translation = translation;
  }

  public printTrad() : string{
    return this.translation;
  }
}
