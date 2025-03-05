import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import { HousingLocation } from './housinglocation';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Route} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]
})
export class AppComponent implements OnInit {
  title = 'homes';

  constructor(private router: Router) {
  }

  ngOnInit() {
    if(this.router.url !== '/') {
      console.log("ngOnInit works!");
      this.goHome();
    }
  }

goHome(): void {
    console.log("goHome page");
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
