import { Component, HostBinding } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'ui-navbar',
  imports: [MatToolbar],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @HostBinding('class.!hidden') hidden = false;
}
