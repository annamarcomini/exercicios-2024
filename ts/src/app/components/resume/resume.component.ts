import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  expanded = false;
  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  @Input() summary!: string;
  constructor() {}

  ngOnInit(): void {}
}
