import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { HomeComponent } from './home/home.component';
import { DonationComponent } from './donation/donation.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { NewsComponent } from './news/news.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { LegalDisComponent } from './legal-dis/legal-dis.component';
import { AnimalShelterComponent } from './animal-shelter/animal-shelter.component';
import { AnimalSanctuaryComponent } from './animal-sanctuary/animal-sanctuary.component';
import { ZooComponent } from './zoo/zoo.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhotoGalleryComponent,
    HomeComponent,
    DonationComponent,
    SponsorshipComponent,
    AdoptionComponent,
    NewsComponent,
    FaqComponent,
    ContactComponent,
    LegalDisComponent,
    AnimalShelterComponent,
    AnimalSanctuaryComponent,
    ZooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
