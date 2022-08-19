import { Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  locales = [
    { code: 'de-De', name: "Deutsch"},
    { code: 'en-US', name: "English"},
  ];

  constructor(@Inject(LOCALE_ID) public activeLocale: string) {

  }

  onChange() {
    window.location.href = '/${this.activeLocale}';
  }

  ngOnInit(): void {
  }

}
