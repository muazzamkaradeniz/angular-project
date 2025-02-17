import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() {}


  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const housingLocation = await data.json();

    return housingLocation || undefined;
  }


  submitApplication(firstName: string, lastName: string, email: string) {

  }
}
