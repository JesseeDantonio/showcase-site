import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ApproachComponent } from '../../components/approach/approach.component';
import { ExpertiseComponent } from '../../components/expertise/expertise.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  imports: [HeroComponent, ServicesComponent, ExpertiseComponent, ApproachComponent, ContactComponent],
  selector: 'app-home.component',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
