import { Component, OnInit } from '@angular/core';
interface Button {
  label: string;
  color: string;
  active: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  buttons = [
    { label: 'Apresentação', color: '#ffff', active: false },
    { label: 'Comitês', color: '#ffff', active: false },
    { label: 'Autores', color: '#ffff', active: false },
    { label: 'Eixos temáticos', color: '#ffff', active: false },
    { label: 'Trabalhos', color: '#FDF1EB', active: true },
    { label: 'Contato', color: '#ffff', active: false },
  ];

  changeButtonColor(button: Button): void {
    this.buttons.forEach((b) => {
      if (b.label === button.label) {
        b.color = b.active ? '#ffff' : '#FDF1EB'; // Alterna a color do botão clicado
        b.active = !b.active; // Inverte o estado.active do botão clicado
      } else {
        b.color = '#ffff'; // Volta a cor original para os outros botões
        b.active = false; // Define o estado ativo como falso para os outros botões
      }
    });
  }
}
