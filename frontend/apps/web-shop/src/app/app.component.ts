import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent, NavbarComponent } from '@m-org/shared-ui';

@Component({
  imports: [RouterModule, BannerComponent, NavbarComponent],
  selector: 'm-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-shop';
}
