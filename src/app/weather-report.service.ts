import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherReportService {
  baseurl = 'https://api.openweathermap.org';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  searchCity(data){
    return this.http.get(this.baseurl + `/data/2.5/weather?q=${data}&APPID=ce34cf9db94969f49db23157d98d6bff`, this.httpOptions)
  };

}
