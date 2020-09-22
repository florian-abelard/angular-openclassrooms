import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuthenticated: boolean = false;
  appareils: any[] = [];

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
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
