import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'beautiful-select-app';

  data: any = [
    { id: 'mini', name: 'Mini Size', image: 'https://i.ibb.co/vj329kZ/rChubG.png' },
    { id: 'suv', name: 'SUV', image: 'https://bit.ly/3aMexdr' },
    { id: 'mini-van', name: 'Mini Van', image: 'https://i.ibb.co/QMcBNMN/IdtFPA.png' },
    { id: 'cruiser', name: 'Cruiser', image: 'https://i.ibb.co/TcMkQDr/YgdsLq.png' },
  ];

  getSelected(event: any) {
    console.log(event);
  }

}
