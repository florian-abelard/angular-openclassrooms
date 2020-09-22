import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareil: any;
  @Input() index: number;

  constructor(private appareilService: AppareilService) { }

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

  onSwitch(): void {
    if (this.appareil.status === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareil.status === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }

}
