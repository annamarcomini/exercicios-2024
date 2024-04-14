import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() userData!: {
    name: string;
    imageURL: string;
    email: string;
    notifications: { user: string; message: string }[];
  };
  constructor() {}

  ngOnInit(): void {}
}
