import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'intro', component: IntroComponent},
  {path: 'main', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: '', pathMatch: 'full', redirectTo:'intro'},
  {path: '**', redirectTo: 'intro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
