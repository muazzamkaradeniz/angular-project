import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');

  applyForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email
  });

  constructor() {

    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);

     this.housingService.getHousingLocationById(housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation || undefined;
      })
      .catch(error => {
        console.error('Error fetching housing location:', error);
      });
  }

  submitApplication() {
    console.log('Application submitted with:', {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
    });


    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
