import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  iSMenuOpened: boolean = false;

  toggleMenu(): void {
    this.iSMenuOpened = !this.iSMenuOpened;
  }

}
