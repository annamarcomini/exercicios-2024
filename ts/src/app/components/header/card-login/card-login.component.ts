import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss'],
})
export class CardLoginComponent implements OnInit {
  @Input() userData!: {
    name: string;
    imageURL: string;
    email: string;
    notifications: { user: string; message: string }[];
  };

  constructor() {}

  ngOnInit(): void {}
}
