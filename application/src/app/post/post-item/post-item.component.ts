import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

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
