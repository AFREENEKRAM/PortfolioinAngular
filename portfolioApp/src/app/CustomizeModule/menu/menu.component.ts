import { Component, OnInit } from '@angular/core';
import { MenuService, Menu } from './menu.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  menu : Menu[];
  constructor( menuService : MenuService) { 
    this.menu = menuService.getMenu();
  }

  ngOnInit(): void {
  }

}
