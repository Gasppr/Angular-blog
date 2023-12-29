import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {


    @Input()
    linkedin : string =''

    @Input()
    gitHub : string =''

    @Input()
    gitLab : string =''

  constructor() {

  }
}
