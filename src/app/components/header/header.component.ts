import { Component } from '@angular/core';
import { LucideMoveUpRight } from '@lucide/angular';
import { RouterLink } from '@angular/router';

@Component({
  imports: [LucideMoveUpRight, RouterLink],
  selector: 'header-component',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
}
