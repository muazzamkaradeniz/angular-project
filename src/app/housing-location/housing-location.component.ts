import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent  implements OnInit  {
  @Input() housingLocation!: HousingLocation;

  ngOnInit(){
    console.log("Housing Location Data: ", this.housingLocation);
  }
}
