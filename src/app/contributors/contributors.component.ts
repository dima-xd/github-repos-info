import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../beans';
import { GithubInfoService } from '../github-info.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  owner: string;
  name: string;
  contributors = new Map<string, User>;

  constructor(private activateRoute: ActivatedRoute, private githubInfo: GithubInfoService) {
    this.owner = activateRoute.snapshot.queryParams['owner'];
    this.name = activateRoute.snapshot.queryParams['name'];
  }

  ngOnInit(): void {
    this.githubInfo.getRepoContributors(this.owner, this.name).subscribe(resp => {
      resp.forEach(con => {
        this.githubInfo.getUserInfo(con.login).subscribe(resp => {
          this.contributors?.set(con.login, resp);
        });
      })
    });
  }

}
