import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo-info-header',
  templateUrl: './repo-info-header.component.html',
  styleUrls: ['./repo-info-header.component.css']
})
export class RepoInfoHeaderComponent implements OnInit {

  @Input() owner: string | undefined;
  @Input() name: string | undefined;

  currentUrl: String | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url.split('?')[0];
  }

}
