import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ViewChild,
} from '@angular/core';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { SidenavLeftComponent } from './sidenav-left/sidenav-left.component';
import { SidenavRightComponent } from './sidenav-right/sidenav-right.component';

@Component({
  selector: 'ui-sidenav',
  imports: [CommonModule, MatSidenavContainer, MatSidenavContent, MatSidenav],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('leftSidenav') leftSidenav?: MatSidenav;
  @ViewChild('rightSidenav') rightSidenav?: MatSidenav;

  @ContentChild(SidenavLeftComponent) leftContent?: SidenavLeftComponent;
  hasLeft!: boolean;
  @ContentChild(SidenavRightComponent) rightContent?: SidenavRightComponent;
  hasRight!: boolean;

  ngAfterViewInit() {}

  ngAfterContentInit() {
    this.hasLeft = !!this.leftContent;
    this.hasRight = !!this.rightContent;
  }

  openLeft() {
    this.leftSidenav?.open(); // Open left sidenav
  }

  openRight() {
    this.rightSidenav?.open(); // Open right sidenav
  }

  closeLeft() {
    this.leftSidenav?.close(); // Close left sidenav
  }

  closeRight() {
    this.rightSidenav?.close(); // Close right sidenav
  }

  toggleLeft() {
    this.leftSidenav?.toggle();
  }

  toggleRight() {
    this.rightSidenav?.toggle();
  }
}
