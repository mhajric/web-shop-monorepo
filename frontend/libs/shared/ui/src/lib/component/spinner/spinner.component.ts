import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-spinner',
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  private _isLoading!: Observable<boolean>;

  @Input() set isLoading(isLoading$: Observable<boolean>) {
    this._isLoading = isLoading$;
  }

  get isLoading() {
    return this._isLoading;
  }
}
