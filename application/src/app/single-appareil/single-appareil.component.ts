import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  appareil: any = {};

  constructor(
    private appareilService: AppareilService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.appareil = this.appareilService.getById(Number(id));
    if (!this.appareil) {
      this.router.navigate(['not-found']);
    }
  }

}
