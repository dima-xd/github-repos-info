import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from './beans';

@Injectable({
  providedIn: 'root'
})
export class GithubInfoService {



  constructor(private http: HttpClient) { }

  getRepos() {
    return this.http.get<Repo[]>('assets/repos.json');
  }
}
