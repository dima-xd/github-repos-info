import { AfterContentInit, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { RepoInfo } from '../beans';
import { GithubInfoService } from '../github-info.service';

@Component({
  selector: 'app-repos-panel',
  templateUrl: './repos-panel.component.html',
  styleUrls: ['./repos-panel.component.css']
})
export class ReposPanelComponent implements OnInit {

  typesSet: String[] = [];
  repoTypes: String[] = [];
  reposInfo: RepoInfo[] = [];

  constructor(private githubInfo: GithubInfoService) { }

  ngOnInit(): void {
    this.typesSet = this.githubInfo.getTypesSet();
    this.repoTypes = this.githubInfo.getRepoTypes();

    this.githubInfo.getReposInfo().forEach((obs, i) => {
      obs.subscribe(resp => {
        this.reposInfo[i] = resp;
      });
    });
  }

}
