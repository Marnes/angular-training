import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    HousingLocationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation;

  constructor() {
    this.housingLocation = this.housingService.getAllHousingLocations();
  }
}
