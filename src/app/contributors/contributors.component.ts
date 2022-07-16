import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
