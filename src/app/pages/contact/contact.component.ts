import { Component } from '@angular/core';
import { FormContactComponent } from '../../components/form-contact/form-contact.component';
import { HeroContactComponent } from '../../components/herocontact/herocontact.component';

@Component({
  imports: [FormContactComponent, HeroContactComponent],
  selector: 'app-contact.component',
  styleUrl: './contact.component.scss',
  templateUrl: './contact.component.html',
})
export class ContactComponent {}
