import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Browse Books', icon: 'pi pi-fw pi-search'},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar'}
    ];

  }
}
