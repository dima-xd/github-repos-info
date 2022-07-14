import { Component, OnInit } from '@angular/core';
import { Repo } from '../beans';
import { GithubInfoService } from '../github-info.service';

@Component({
  selector: 'app-repos-panel',
  templateUrl: './repos-panel.component.html',
  styleUrls: ['./repos-panel.component.css']
})
export class ReposPanelComponent implements OnInit {

  repos: Repo[] = [];

  constructor(private githubInfo: GithubInfoService) { }

  ngOnInit(): void {
    this.githubInfo.getRepos().subscribe(resp => {
      this.repos = resp;
    });
  }

}
