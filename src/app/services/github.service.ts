import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  public searchUsers(term: string, limit= 5): Observable<any> {
    return this.http.get(`https://api.github.com/search/users?q=${term}&per_page=${limit}`);
  }

  public getRepositoriesByUser(username: string, limit= 5): Observable<any> {
    return this.http.get(`https://api.github.com/search/repositories?q=user:${username}&per_page=${limit}`);
  }
}
