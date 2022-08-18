import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptionComponent } from './adoption/adoption.component';
import { AnimalSanctuaryComponent } from './animal-sanctuary/animal-sanctuary.component';
import { AnimalShelterComponent } from './animal-shelter/animal-shelter.component';
import { ContactComponent } from './contact/contact.component';
import { DonationComponent } from './donation/donation.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LegalDisComponent } from './legal-dis/legal-dis.component';
import { NewsComponent } from './news/news.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { ZooComponent } from './zoo/zoo.component';
import { Error404Component } from './error404/error404.component';
import { ErrorAdoptionComponent } from './error-adoption/error-adoption.component';
import { ErrorDonationComponent } from './error-donation/error-donation.component';
import { ErrorSponsorshipComponent } from './error-sponsorship/error-sponsorship.component';
import { SuccessAdoptionComponent } from './success-adoption/success-adoption.component';
import { SuccessDonationComponent } from './success-donation/success-donation.component';
import { SuccessSponsorshipComponent } from './success-sponsorship/success-sponsorship.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupErrorComponent } from './signup-error/signup-error.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'donation', component: DonationComponent},
  {path: 'sponsorship', component: SponsorshipComponent},
  {path: 'adoption', component: AdoptionComponent},
  {path: 'photo-gallery', component: PhotoGalleryComponent},
  {path: 'news', component: NewsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'legal-dis', component: LegalDisComponent},
  {path: 'animal-shelter', component: AnimalShelterComponent},
  {path: 'animal-sanctuary', component: AnimalSanctuaryComponent},
  {path: 'zoo', component: ZooComponent},
  {path: 'error404', component: Error404Component},
  {path: 'error-adoption', component: ErrorAdoptionComponent},
  {path: 'error-donation', component: ErrorDonationComponent},
  {path: 'error-sponsorship', component: ErrorSponsorshipComponent},
  {path: 'success-adoption', component: SuccessAdoptionComponent},
  {path: 'success-donation', component: SuccessDonationComponent},
  { path: 'success-sponsorship', component: SuccessSponsorshipComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  {path: 'signup-error', component:SignupErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
