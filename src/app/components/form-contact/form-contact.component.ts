import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';

@Component({
  imports: [AsyncPipe],
  selector: 'formcontact-component',
  styleUrl: './form-contact.component.scss',
  templateUrl: './form-contact.component.html',
})
export class FormContactComponent {
    private breakpointObserver = inject(BreakpointObserver);

  isCompact$ = this.breakpointObserver
    .observe('((max-width: 600px) or (max-width: 1300px))')
    .pipe(map(result => result.matches));
}
