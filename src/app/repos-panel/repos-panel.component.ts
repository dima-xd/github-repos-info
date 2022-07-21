import { Component, OnInit } from '@angular/core';
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

  checkboxes: TypesCheckbox[] = [];

  allReposInfo: RepoInfo[] = [];
  allReposTypes: String[] = [];

  constructor(private githubInfo: GithubInfoService) { }

  ngOnInit(): void {
    this.repoTypes = this.githubInfo.getRepoTypes();
    this.allReposTypes = [...this.repoTypes];

    this.githubInfo.getTypesSet().forEach((resp, i) => {
      this.checkboxes.push({isChecked: true, name: resp});
    });

    this.githubInfo.getReposInfo().forEach((obs, i) => {
      obs.subscribe(resp => {
        this.reposInfo[i] = resp;
        this.allReposInfo[i] = resp;
      });
    });
  }

  onChangeType(event: any) {
    const name = event.target.value;
    const isChecked = event.target.checked;
    switch (isChecked) {
      case true: {
        this.show(name);
        break;
      }
      case false: {
        this.hide(name);
        break;
      }
    }
  }

  hide(type: String) {
    this.repoTypes.forEach(() => {
      const index = this.repoTypes.findIndex(repoType => {
        return repoType == type;
      });
      if (index !== -1) {
        this.reposInfo.splice(index, 1);
        this.repoTypes.splice(index, 1);
      }
    });
  }

  show(type: String) {
    const historyReposTypes = [...this.allReposTypes];
    const historyReposInfo = [...this.allReposInfo];
    historyReposTypes.forEach(() => {
      const index = historyReposTypes.findIndex(repoType => {
        return repoType == type;
      });
      if (index !== -1) {
        this.reposInfo.splice(index, 0, historyReposInfo[index]);
        historyReposInfo.splice(index, 1);

        this.repoTypes.splice(index, 0, historyReposTypes[index]);
        historyReposTypes.splice(index, 1);
      }
    });
  }

}

export interface TypesCheckbox {
  isChecked: boolean
  name: String
}
