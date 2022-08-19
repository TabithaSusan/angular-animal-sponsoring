import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.css']
})
export class SponsorshipComponent implements OnInit {

  Facilities: any;
  AnimalTyp:any;
  Sponsorships: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFacilities();
    this.getAnimalTyp();
  }
   
  getFacilities() {
    return this.http.get("Facilities").subscribe(x => {
      this.Facilities = x;
    }
  )}

  getAnimalTyp() {
    return this.http.get("AnimalTyp").subscribe(x => {
      this.AnimalTyp = x;
    }
  )}

}
