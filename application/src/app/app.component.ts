import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  seconds: number;
  counterSubscription: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    this.posts = this.fetchBlogPosts();

    const counter: Observable<number> = interval(1000);

    this.counterSubscription = counter.subscribe(
      (value) => {
        this.seconds = value;
      },
      (error) => {
        console.log('An error occurred! :>> ', error);
      },
      () => {
        console.log('Observable complete');
      }
    );
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }

  fetchBlogPosts(): Post[] {

    const posts: Post[] = [];

    posts.push(
      new Post(
        '8 habitudes de développeur(euse)s qui font progresser',
        'Avec le temps, j\'ai fini par comprendre que ce qui comptait le plus dans ce métier, c\'était les habitudes. Toutes ces petites décisions et façons de faire.'
      )
    );
    posts.push(
      new Post(
        'Faut-il être passionné(e) pour être développeur(euse) ?',
        'La passion chez les développeurs est un concept qui met une pression folle à beaucoup de gens. Tu en entends parler en permanence.'
      )
    );
    posts.push(
      new Post(
        'L\'incroyable ego des développeur(euse)s',
        'L\'ego des développeurs est incroyable. J\'entends beaucoup parler du syndrome de l\'imposteur mais le syndrome de l\'énorme boulard est tout aussi présent.'
      )
    );

    return posts;
  }
}
