import { Component, OnInit } from '@angular/core';
import { RepoInfo } from '../beans';
import { GithubInfoService } from '../github-info.service';

@Component({
  selector: 'app-repos-panel',
  templateUrl: './repos-panel.component.html',
  styleUrls: ['./repos-panel.component.css']
})
export class ReposPanelComponent implements OnInit {

  types: String[] = [];
  reposInfo: RepoInfo[] = [];

  constructor(private githubInfo: GithubInfoService) { }

  ngOnInit(): void {
    this.types = this.githubInfo.getTypes(); 

    this.githubInfo.getReposInfo().forEach(obs => {
      obs.subscribe(resp => {
        this.reposInfo.push(resp);
      });
    });
  }

}
