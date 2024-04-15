import { Component, Input, OnInit } from '@angular/core';
type Question = {
  title: string;
  text: string;
};

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() userData!: {
    name: string;
    imageURL: string;
    email: string;
    notifications: { user: string; message: string }[];
  };

  addQuestion = (question: Question) => {
    let newQuestion = {
      likes: 0,
      answers: [],
      author: this.userData.name,
      ...question,
    };

    this.article.questions.splice(0, 0, newQuestion);
  };

  article = {
    title:
      'Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP',
    type: 'Pôster',
    theme: 'Alimentação e saúde (AS)',
    keyWords: 'Alimentos,funcionais, alimentação escolar',
    authors: [
      'Galileo Galilei¹',
      'Berta Lange de Morretes²',
      'Isaac Newton³',
      'Cesar Lattes¹',
      'Stephen Hawking⁴',
    ],
    locals: [
      '¹Universidade Estadual de Campinas',
      '²Universidade de São Paulo',
      '³Instituto Nacional de Pesquisas Espaciais',
      '⁴Universidade Federal do Rio de Janeiro',
    ],
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.\n\nFusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.\n\nNam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.\n\nPraesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    questions: [
      {
        title: 'Assunto da pergunta aparece aqui',
        author: 'Carlos Henrique Santos',
        text: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?',
        likes: 1,
        answers: [
          {
            name: 'Adriano da Silva',
            text: 'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
            role: 'Autor',
          },
        ],
      },

      {
        title: 'Assunto da pergunta aparece aqui',
        author: 'Carlos Henrique Santos',
        text: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?',
        likes: 4,
        answers: [
          {
            name: 'Adriano da Silva',
            text: 'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
            role: 'Autor',
          },
          {
            name: 'Carlos Henrique Santos',
            text: 'Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.\nObrigada pela resposta, muito interessante o seu trabalho! ',
            role: '',
          },
          {
            name: 'Carmila Ferreira Andrade',
            text: 'Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.\nSituado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
            role: 'Coautor',
          },
          {
            name: 'Ana Carolina',
            text: 'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
            role: 'Coautor',
          },
        ],
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
