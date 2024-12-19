import { Component, HostBinding } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'ui-navbar',
  imports: [MatToolbar, MatIcon, MatIconButton],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @HostBinding('class.!hidden') hidden = false;
}
