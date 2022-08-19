import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {

  Facilities: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFacilities();
  }
  
  getFacilities() {
    return this.http.get("Facilities WHERE FacilityTypsID = 1").subscribe(x => {
      this.Facilities = x;
    }
  )}

}
