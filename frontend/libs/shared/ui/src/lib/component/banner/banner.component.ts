import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ui-banner',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() icon?: string; // Material icon name
  @Input() title!: string; // Banner title
  @Input() description!: string; // Banner description
  @Input() backgroundColor = '#ffffff'; // Default background color
  @Input() closable = false; // Whether the banner can be closed

  isVisible = true;

  get textColor(): string {
    // Calculate text color (light or dark) based on background color
    const rgb = this.hexToRgb(this.backgroundColor);
    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    return luminance > 0.5 ? '#000000' : '#ffffff';
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 255, g: 255, b: 255 }; // Fallback to white if invalid
  }

  closeBanner(): void {
    this.isVisible = false;
  }
}
