import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepoInfo } from './beans';
import { Observable } from 'rxjs';
import repos from 'src/assets/repos.json'

const GITHUB_API = 'https://api.github.com/';

@Injectable({
  providedIn: 'root'
})
export class GithubInfoService {

  reposInfo: Observable<RepoInfo>[] = [];
  types: String[] = [];

  constructor(private http: HttpClient) { }

  getTypes() {
    repos.forEach(repo => {
      if (!this.types.includes(repo.type)) {
        this.types.push(repo.type);
      }
    });
    return this.types;
  }

  getReposInfo() {
    repos.forEach(repo => {
      this.reposInfo.push(this.http.get<RepoInfo>(GITHUB_API + 'repos/' + repo.owner + '/' + repo.name));
    });
    return this.reposInfo;
  }
  
}
