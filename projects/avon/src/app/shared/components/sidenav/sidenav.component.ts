import {Component, Input} from '@angular/core';

import {SidenavItem} from '../../../core/models/SidenavItem';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() public sidenavItems: SidenavItem[] = [
    new SidenavItem('Home', 'home', '/home'),
    new SidenavItem('About', 'information', '/about'),
    new SidenavItem('Companies', 'church', '/companies'),
    new SidenavItem('Events', 'calendar', '/events')
  ];
}
