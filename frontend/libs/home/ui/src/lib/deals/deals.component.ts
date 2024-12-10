import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-deals',
  standalone: true,
  imports: [],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss',
})
export class DealsComponent {
  @Input() data: any;
}
