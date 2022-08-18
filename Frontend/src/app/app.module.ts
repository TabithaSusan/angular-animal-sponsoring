import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { SuccessDonationComponent } from './success-donation/success-donation.component';
import { SuccessAdoptionComponent } from './success-adoption/success-adoption.component';
import { SuccessSponsorshipComponent } from './success-sponsorship/success-sponsorship.component';
import { Error404Component } from './error404/error404.component';
import { ErrorDonationComponent } from './error-donation/error-donation.component';
import { ErrorAdoptionComponent } from './error-adoption/error-adoption.component';
import { ErrorSponsorshipComponent } from './error-sponsorship/error-sponsorship.component';
import { SignUpComponent } from './sign-up/sign-up.component';



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
    ZooComponent,
    SuccessDonationComponent,
    SuccessAdoptionComponent,
    SuccessSponsorshipComponent,
    Error404Component,
    ErrorDonationComponent,
    ErrorAdoptionComponent,
    ErrorSponsorshipComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
