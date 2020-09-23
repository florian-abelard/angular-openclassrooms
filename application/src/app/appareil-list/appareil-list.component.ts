import { Component, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-list',
  templateUrl: './appareil-list.component.html',
  styleUrls: ['./appareil-list.component.scss']
})
export class AppareilListComponent {

  @Input() appareils: any[];
  @Input() isAuthenticated: boolean;

  constructor(private appareilService: AppareilService) {
  }
}
