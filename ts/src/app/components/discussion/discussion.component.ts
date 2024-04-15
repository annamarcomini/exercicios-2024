import { Component, Input, OnInit } from '@angular/core';
type Question = {
  title: string;
  text: string;
};

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss'],
})
export class DiscussionComponent implements OnInit {
  @Input() questions!: {
    title: string;
    author: string;
    text: string;
    likes: number;
    answers: { name: string; text: string; role: string }[];
  }[];

  @Input() addQuestion!: (question: Question) => void;
  constructor() {}

  ngOnInit(): void {}
}
