import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  @Input()
  cardTitle : string = ''

  @Input()
  cardPhoto : string = ''

  @Input()
  id : string = '0'
  
   constructor() {

  }
}
