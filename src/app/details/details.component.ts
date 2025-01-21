import { Component, inject, Input } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  @Input()
  set id(id: string) {
    this.housingLocation = this.housingService.getHousingLocation(Number(id));
  }

  protected readonly JSON = JSON;
}
