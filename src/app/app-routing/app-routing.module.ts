import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';
import { HomeComponent } from '../home/home.component';
import { PostListComponent } from '../posts/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  {path:'post',component:PostListComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule {}
