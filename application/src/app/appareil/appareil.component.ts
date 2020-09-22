import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareil: any;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareil.status;
  }

  getColor(): string {
    if (this.getStatus() === 'allumé') {
      return 'green';
    }
    else {
      return 'red';
    }
  }

}
