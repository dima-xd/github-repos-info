import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributorsComponent } from './contributors/contributors.component';
import { HomeComponent } from './home/home.component';
import { RepoInfoComponent } from './repo-info/repo-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'repo', component: RepoInfoComponent },
  { path: 'contributors', component: ContributorsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
