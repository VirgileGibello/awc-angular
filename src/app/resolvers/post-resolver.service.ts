import { inject } from '@angular/core';
import { ActivatedRoute, ResolveFn, RouterState } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';
import { PostService } from '../services/post.service';

export const postResolver: ResolveFn<Post> = (
    route,
    state
): any => {
    const postService = inject(PostService);
    return postService.get()
};