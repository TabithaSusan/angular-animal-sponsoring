import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.css']
})
export class SponsorshipComponent implements OnInit {

  Location: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getLocation();
  }
  

  getLocation() {
    return this.http.get("Location").subscribe(x => {
      this.Location = x;
    }
  )}

}
