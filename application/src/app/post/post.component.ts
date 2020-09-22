import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

  title(): string {
    return this.post.title;
  }

  content(): string {
    return this.post.content;
  }

  createdAt(): Date {
    return this.post.createdAt;
  }

  loveItsCount(): number {
    return this.post.loveIts;
  }

  onLoveIt(): void {
    this.post.loveIts += 1;
  }

  onDontLoveIt(): void {
    this.post.loveIts -= 1;
  }
}
