import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  imports: [RouterLink],
  selector: 'burger-component',
  styleUrl: './burger.component.scss',
  templateUrl: './burger.component.html',
})
export class BurgerComponent {
  
  private isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  get menuIsOpen() : boolean {
    return this.isOpen;
  }
}
