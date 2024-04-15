import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type Question = {
  title: string;
  text: string;
};

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  showFormTopic = false;

  handleNewTopic(): void {
    this.showFormTopic = true;
  }

  showSuccessMessage = false;

  handleNewSuccessMsg(): void {
    this.showSuccessMessage = true;
  }

  questionForm!: FormGroup;
  @Input() addQuestion!: (question: Question) => void;

  constructor() {}

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
    });
  }

  get title() {
    return this.questionForm.get('title')!;
  }

  get text() {
    return this.questionForm.get('text')!;
  }
  submit() {
    if (this.questionForm.invalid) {
      return;
    }

    this.handleNewSuccessMsg();
  }
}
