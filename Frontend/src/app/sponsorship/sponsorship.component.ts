import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.css']
})
export class SponsorshipComponent implements OnInit {

  Location: any;
  AnimalTyp:any;
  Sponsorships: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getLocation();
    this.getAnimalTyp();
  }
  

  getLocation() {
    return this.http.get("Location").subscribe(x => {
      this.Location = x;
    }
  )}

  getAnimalTyp() {
    return this.http.get("AnimalTyp").subscribe(x => {
      this.AnimalTyp = x;
    }
  )}

  /*putSponsorship(){
    return this.http.post("Sponsorships").subscribe(x =>{
      this.Sponsorships = X;
    })
  }*/

}
