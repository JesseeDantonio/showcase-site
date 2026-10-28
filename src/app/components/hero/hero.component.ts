import { Component, inject } from '@angular/core';
import { LucideCircleDashed, LucideGlobe, LucideMoveDown, LucideMoveUpRight } from '@lucide/angular';
import { AsyncPipe } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';

@Component({
  imports: [LucideMoveUpRight, LucideMoveDown, LucideCircleDashed ,AsyncPipe],
  selector: 'hero-component',
  styleUrl: './hero.component.scss',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isCompact$ = this.breakpointObserver
    .observe('((max-width: 600px) or (max-width: 1300px)')
    .pipe(map(result => result.matches));
}
