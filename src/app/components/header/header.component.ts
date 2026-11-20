import { Component, inject } from '@angular/core';
import { LucideMoveUpRight } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { BurgerComponent } from '../burger/burger.component';
import { AsyncPipe } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';

@Component({
  imports: [LucideMoveUpRight, RouterLink, BurgerComponent, AsyncPipe],
  selector: 'header-component',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private breakpointObserver = inject(BreakpointObserver);
  isCompact$ = this.breakpointObserver
    .observe('((max-width: 900px)')
    .pipe(map(result => result.matches));
}
