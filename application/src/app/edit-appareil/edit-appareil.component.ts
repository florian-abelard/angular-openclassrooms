import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppareilListComponent } from '../appareil-list/appareil-list.component';
import { AppareilComponent } from '../appareil/appareil.component';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultStatus: string = 'éteint';

  constructor(
    private appareilService: AppareilService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.appareilService.addAppareil(form.value.name, form.value.status);

    this.router.navigate(['/appareils']);
  }
}
