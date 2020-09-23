import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilListComponent } from './appareil-list/appareil-list.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { FourOhFourComponent } from './error/four-oh-four/four-oh-four.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { AppareilService } from './services/appareil.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilListComponent,
    AppareilComponent,
    PostListComponent,
    PostComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
