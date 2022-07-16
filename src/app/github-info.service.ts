import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepoInfo } from './beans';
import { Observable } from 'rxjs';
import repos from 'src/assets/repos.json'

const GITHUB_API = 'https://api.github.com/';
const REPOS_OPERATION = 'repos/';

@Injectable({
  providedIn: 'root'
})
export class GithubInfoService {

  reposInfo: Observable<RepoInfo>[] = [];
  typesSet: string[] = [];
  repoTypes: string[] = [];

  constructor(private http: HttpClient) { }

  getReposLenght() {
    return repos.length;
  }

  getTypesSet() {
    repos.forEach(repo => {
      if (!this.typesSet.includes(repo.type)) {
        this.typesSet.push(repo.type);
      }
    });
    return this.typesSet;
  }

  getRepoTypes() {
    repos.forEach((repo, i) => {
      this.repoTypes[i] = repo.type;
    });
    return this.repoTypes;
  }

  getReposInfo() {
    repos.forEach((repo, i) => {
      this.reposInfo[i] = this.http.get<RepoInfo>(GITHUB_API + REPOS_OPERATION + repo.owner + '/' + repo.name);
    });
    return this.reposInfo;
  }

  getSpecificRepoInfo(owner: string, name: string) {
    return this.http.get<RepoInfo>(GITHUB_API + REPOS_OPERATION + owner + '/' + name);
  }

  getRepoLanguages(owner: string, name: string) {
    return this.http.get(GITHUB_API + REPOS_OPERATION + owner + '/' + name + '/' + 'languages');
  }
  
}
