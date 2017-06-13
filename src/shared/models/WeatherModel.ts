/**
 * Classe représentant object Message
 * Cet objet est renvoyé grâce à l'url /threads/:id/messages avec :id un nombre entier représentant l'id d'un channel
 */
export class WeatherModel {

  public place: string;

  /**
   * description meteo
   */
  public description: string;

  /**
   * Temperature actuelle
   */
  public temp: number;

  /**
   * Humidité actuelle
   */
  public humidity: string;

  /**
   * Pression de l'air
   */
  public pressure: string;


  constructor(place: string,description: string, temp: number, humidity: string, pressure: string) {
    this.place = place;
    this.description = description;
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
  }

  public printWeather(): string {
    return "A " + this.place + " la température actuelle est de : " + this.temp + "°C et il fait actuelle " + this.description +
      ". La pression est de : " + this.pressure + "hPa et l'humidité est de : " + this.humidity + "%";
  }
}
