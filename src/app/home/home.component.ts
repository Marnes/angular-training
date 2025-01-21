import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    HousingLocationComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocations: HousingLocation[] = [];

  constructor() {
    this.housingLocations = this.housingService.getAllHousingLocations();
  }
}
