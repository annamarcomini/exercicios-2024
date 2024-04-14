import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() notifications!: { user: string; message: string }[];
  @Input() imageURL!: string;

  constructor() {}

  ngOnInit(): void {}
}
