import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

housingLocationList: HousingLocation[] = [];
housingService: HousingService = inject(HousingService);
filteredLocationList: HousingLocation[] = [];

constructor() {
  this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
    this.housingLocationList = housingLocationList;
    this.filteredLocationList = housingLocationList;
  });
}

filterResults(text: string) {
  if (!text) {
    this.filteredLocationList = this.housingLocationList;
    return;
  }
  else{

  this.filteredLocationList = this.housingLocationList.filter(
    housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
  );
}
}




}

