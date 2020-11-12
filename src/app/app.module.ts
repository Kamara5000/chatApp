import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChatComponent } from './chat/chat.component';
import { FriendFilterPipe } from './pipes/friend-filter.pipe';
import { ChatPipe } from './pipes/chat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    GroupChatComponent,
    ChatPageComponent,
    NotfoundComponent,
    ChatComponent,
    FriendFilterPipe,
    ChatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
