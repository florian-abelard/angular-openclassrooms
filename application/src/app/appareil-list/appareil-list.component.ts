import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appareil-list',
  templateUrl: './appareil-list.component.html',
  styleUrls: ['./appareil-list.component.scss']
})
export class AppareilListComponent {

  @Input() appareils: any[];
  @Input() isAuthenticated: boolean;

  constructor() {
  }

  onAllumer(): void {
    console.log('On alllume tous les appareils');
  }
}
