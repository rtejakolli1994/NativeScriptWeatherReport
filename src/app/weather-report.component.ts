import { Component, OnInit } from "@angular/core";
import { WeatherReportService } from "./weather-report.service";

@Component({
    selector: 'ns-weather-report',
    templateUrl: './weather-report.component.html',
    styleUrls: ['./weather-report.component.css'],
    moduleId: module.id
})
export class WeatherReportComponent implements OnInit {
    cityName = '';
    currentCityName = '';
    gridstatus= false;
    cityReport: any;
    errInfo = '';
    constructor(
        private weatherReportService: WeatherReportService
    ){}
    ngOnInit(): void { }
    onChange() {
        this.currentCityName = this.cityName;
        return this.weatherReportService.searchCity(this.currentCityName).subscribe(data => {
            this.cityReport = data;
            if(this.cityReport){
                this.gridstatus = true;
            } else {
                this.gridstatus = false;
            }
        },
        err => {
            this.gridstatus = false;
            this.errInfo = err.error.message;
        });
    }
}