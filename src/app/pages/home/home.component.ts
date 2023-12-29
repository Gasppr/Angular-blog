import { Component, Input } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  manchete: any[] = [];

  data: any[] = [];

  constructor() {
    this.manchete.push(dataFake[0]);

    this.data = dataFake.filter(news => (news.id != this.manchete[0].id));
  }
}
