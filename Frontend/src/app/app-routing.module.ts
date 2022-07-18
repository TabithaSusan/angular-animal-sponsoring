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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
