import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  @Input() data: any;
}
