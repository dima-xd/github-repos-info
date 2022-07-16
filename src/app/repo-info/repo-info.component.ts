import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.css']
})
export class RepoInfoComponent implements OnInit {

  owner: string
  name: string

  constructor(private activateRoute: ActivatedRoute) {
    this.owner = activateRoute.snapshot.queryParams['owner'];
    this.name = activateRoute.snapshot.queryParams['name'];
  }

  ngOnInit(): void {
    
  }

}
