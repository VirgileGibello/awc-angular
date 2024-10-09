import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    http = inject(HttpClient);
    BASE_URL: string = 'https://jsonplaceholder.typicode.com/';

    get(): Observable<Post[]> {
        return this.http.get<Post[]>(this.BASE_URL + `posts`);
    }

    getById(id: number): Observable<Post> {
        return this.http.get<Post>(this.BASE_URL + `posts/${id}`);
    }
}