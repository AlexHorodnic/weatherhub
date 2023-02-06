import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'de91e325880dbe179c909c91c83c0a2b';
  constructor(private http: HttpClient) {
  }
  getAllWeather(city:string, countryCode:string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&units=metric&appid=${this.apiKey}`)
  }
  getCityWeather(city:string, countryCode:string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&units=metric&appid=${this.apiKey}`)
  }
}
