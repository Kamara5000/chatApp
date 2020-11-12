import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatsGuard } from './guards/chats.guard';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'profile/:p', component: ProfileComponent, canActivate:[ChatsGuard]},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'chatpage', component: ChatPageComponent, canActivate:[ChatsGuard]},
  {path: '**', component: NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
