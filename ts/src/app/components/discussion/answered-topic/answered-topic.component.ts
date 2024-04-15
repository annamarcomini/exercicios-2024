import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answered-topic',
  templateUrl: './answered-topic.component.html',
  styleUrls: ['./answered-topic.component.scss'],
})
export class AnsweredTopicComponent implements OnInit {
  @Input() question!: {
    title: string;
    author: string;
    text: string;
    likes: number;
    answers: { name: string; text: string; role: string }[];
  };

  constructor() {}

  showAnswers = false;

  onSubjectClick(): void {
    this.showAnswers = !this.showAnswers;
  }

  ngOnInit(): void {}
}
