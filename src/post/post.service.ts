import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';
import { Post } from './post.interface';

@Injectable()
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Generate a NestJS project',
      content: 'content',
      createdAt: new Date(),
    },
    {
      id: 2,
      title: 'Create CRUD RESTful APIs',
      content: 'content',
      createdAt: new Date(),
    },
    {
      id: 3,
      title: 'Connect to MongoDB',
      content: 'content',
      createdAt: new Date(),
    },
  ];

  findAll(keyword?: string): Observable<Post> {
    if (keyword) {
      return from(this.posts.filter(post => post.title.indexOf(keyword) >= 0));
    }

    return from(this.posts);
  }
}    
