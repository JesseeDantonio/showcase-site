import { Component, inject } from '@angular/core';
import { LucideMoveUpRight, LucideCircleDashed } from '@lucide/angular';
import { AsyncPipe } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';

@Component({
  imports: [LucideMoveUpRight, AsyncPipe, LucideCircleDashed],
  selector: 'contact-component',
  styleUrl: './contact.component.scss',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
    private breakpointObserver = inject(BreakpointObserver);

  isCompact$ = this.breakpointObserver
    .observe('(max-width: 1300px) or (max-width: 600px)')
    .pipe(map(result => result.matches));
}
