import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weather: any;
  cityName: string = '';
  forecastData: any[] | undefined;
  Math = Math;
  citiesWeather: Array<any> = [];

  cities = [
    { city: 'Athens', countryCode: 'GR' },
    { city: 'Dublin', countryCode: 'IE' },
    { city: 'Berlin', countryCode: 'DE' },
    { city: 'London', countryCode: 'UK' },
    { city: 'Rome', countryCode: 'IT' },
    { city: 'Moscow', countryCode: 'RU' },
    { city: 'Stockholm', countryCode: 'SE' },
    { city: 'Oslo', countryCode: 'NO' },
    { city: 'Copenhagen', countryCode: 'DK' },
    { city: 'Madrid', countryCode: 'ES' },
    { city: 'Amsterdam', countryCode: 'NL' },
    { city: 'Bucharest', countryCode: 'RO' },
    { city: 'Sofia', countryCode: 'BG' },
    { city: 'Helsinki', countryCode: 'FI' },
    { city: 'Prague', countryCode: 'CZ' },
    { city: 'Tirana', countryCode: 'AL' }
  ];


  constructor(private weatherService: WeatherService, private router: Router) {

  }

  ngOnInit(): void {
    this.cities.forEach(city => {
      this.getCityWeather(city.city, city.countryCode);
    });
  }

  getCityWeather(city: string, countryCode: string) {
    this.weatherService.getAllWeather(city, countryCode).subscribe(data => {
      this.weather = data;
      this.cityName = this.weather.city.name;
      this.forecastData = this.weather.list;
      this.citiesWeather.push({ city, weatherData: data });
    });
  }
  getWeatherIcon(weatherDescription: string) {
    switch (weatherDescription) {
      case 'clear sky':
        return 'https://openweathermap.org/img/wn/01d@2x.png';
      case 'few clouds':
        return 'https://openweathermap.org/img/wn/02d@2x.png';
      case 'scattered clouds':
        return 'https://openweathermap.org/img/wn/04d@2x.png';
      case 'broken clouds':
        return 'https://openweathermap.org/img/wn/04d@2x.png';
      case 'overcast clouds':
        return 'https://openweathermap.org/img/wn/04d@2x.png';
      case 'shower rain':
        return 'https://openweathermap.org/img/wn/09d@2x.png';
      case 'rain':
        return 'https://openweathermap.org/img/wn/09d@2x.png';
      case 'light rain':
        return 'https://openweathermap.org/img/wn/09d@2x.png';
      case 'moderate rain':
        return 'https://openweathermap.org/img/wn/09d@2x.png';
      case 'thunderstorm':
        return 'https://openweathermap.org/img/wn/13d@2x.png';
      case 'light snow':
        return 'https://openweathermap.org/img/wn/13d@2x.png';
      case 'snow':
        return 'https://openweathermap.org/img/wn/13d@2x.png';
      default:
        return '';
    }
  }
}
