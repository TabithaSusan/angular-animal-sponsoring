import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  PhotoGallery: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPhotoGallery();
  }
  

  getPhotoGallery() {
    return this.http.get("PhotoGallery").subscribe(x => {
      this.PhotoGallery = x;
    }
  )}

}
