import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {


Facilities: any;

constructor(private http: HttpClient) { }

ngOnInit(): void {
  this.getFacilities();
}

getFacilities() {
  return this.http.get("Facilities").subscribe(x => {
    this.Facilities = x;
  }
)}

}