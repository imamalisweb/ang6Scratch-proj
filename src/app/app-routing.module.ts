import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// @ ilias import component to see the route 
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
{
  path: '',
  component: UsersComponent
},
{
  path: 'posts',
  component: PostsComponent
},
{
  path: 'details/:id',
  component: DetailsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
