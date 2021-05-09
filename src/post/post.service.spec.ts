import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';

import { first, take, toArray } from 'rxjs/operators';

describe('PostService', () => {
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostService],
    }).compile();

    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getAllPosts should return 3 posts', done => {
    service
      .findAll()
      .pipe(take(3), toArray())
      .subscribe({
        next: data => expect(data.length).toBe(3),
        error: error => console.log(error),
        complete: done(),
      });
  });

  it('getAllPosts with keyword should return 1 post', done => {
    service
        .findAll('Generate')
        .pipe(take(3), toArray())
        .subscribe({
        next: data => expect(data.length).toBe(1),
        error: error => console.log(error),
        complete: done(),
    });
});
})  