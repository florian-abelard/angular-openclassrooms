import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor(private httpClient: HttpClient) { }

  emitAppareilsSubject(): void {
    this.appareilsSubject.next(this.appareils.slice());
  }

  getById(id: number): any {
    const appareil = this.appareils.find((element) => {
      return element.id === id;
    });

    return appareil;
  }

  addAppareil(name: string, status: string): void {
    const appareil = {
      id: this.appareils[(this.appareils.length - 1)].id + 1,
      name,
      status,
    };

    this.appareils.push(appareil);
    this.emitAppareilsSubject();
  }

  switchOnAll(): void {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilsSubject();
  }

  switchOffAll(): void {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilsSubject();
  }

  switchOnOne(i: number): void {
    this.appareils[i].status = 'allumé';
    this.emitAppareilsSubject();
  }

  switchOffOne(i: number): void {
    this.appareils[i].status = 'éteint';
    this.emitAppareilsSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
      .post('https://httpclient-demo.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
