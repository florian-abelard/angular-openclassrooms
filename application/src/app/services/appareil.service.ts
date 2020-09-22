export class AppareilService {

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  switchOnAll(): void {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll(): void {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }
}