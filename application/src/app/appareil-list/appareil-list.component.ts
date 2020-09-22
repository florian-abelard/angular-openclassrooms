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

  onSwitchOn(): void {
    this.appareilService.switchOnAll();
  }

  onSwitchOff(): void {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
}
