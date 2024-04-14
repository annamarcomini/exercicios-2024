import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
