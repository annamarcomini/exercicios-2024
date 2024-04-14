import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DevChuva';
  languages = [{ label: 'PT, BR' }, { label: 'EN, UK' }, { label: 'EN, US' }];
  
  userData = {
    imageURL: '/assets/images/png/avatar2.png',
    name: 'Maria Joaquina',
    email: 'alguem12@galoascience.com',
    notifications: [
      {
        user: 'Cirilo',
        message: 'Olá Maria Joaquina',
      },
      {
        user: 'Cirilo',
        message: 'Passei para ver se esta tudo bem com você?',
      },
    ],
  };
}
