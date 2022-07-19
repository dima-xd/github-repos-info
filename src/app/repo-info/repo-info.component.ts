import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Language, RepoInfo } from '../beans';
import { GithubInfoService } from '../github-info.service';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.css']
})
export class RepoInfoComponent implements OnInit {

  owner: string;
  name: string;

  repoInfo: RepoInfo | undefined;
  languages: Map<string, number> | undefined;

  constructor(private activateRoute: ActivatedRoute, private githubInfo: GithubInfoService) {
    this.owner = activateRoute.snapshot.queryParams['owner'];
    this.name = activateRoute.snapshot.queryParams['name'];
  }

  ngOnInit(): void {
    this.githubInfo.getSpecificRepoInfo(this.owner, this.name).subscribe(resp => {
      this.repoInfo = resp;
    });
    this.githubInfo.getRepoLanguages(this.owner, this.name).subscribe(resp => {
      this.languages = new Map(Object.entries(resp)); 
    });
  }

}
