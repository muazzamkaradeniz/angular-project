import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import { HousingLocation } from './housinglocation';
import { Component } from '@angular/core';
import {Route} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]
})
export class AppComponent {
  title = 'homes';

  constructor(private router: Router) {
  }

  goHome() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    })
  }
}
