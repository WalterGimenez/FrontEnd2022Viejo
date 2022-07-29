import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() class! : string;
  @Input() text!: string;
  @Input() type!: string;
  @Input() id!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
