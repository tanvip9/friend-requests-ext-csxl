import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

/* HTTP and Auth */
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './navigation/http-request.interceptor';
import { JwtModule } from '@auth0/angular-jwt';

/* UI / Material Dependencies */
import { DatePipe, NgForOf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

/* Material UI Dependencies */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

/* Application Specific */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorDialogComponent } from './navigation/error-dialog/error-dialog.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GateComponent } from './gate/gate.component';
import { ProfileEditorComponent } from './profile/profile-editor/profile-editor.component';
import { EventFilterPipe } from './event/event-filter/event-filter.pipe';

/* Friendship Specific */
import { SendRequestsComponent } from './friends/requests/send-requests/send-requests.component';
import { FriendshipHomeComponent } from './friends/friendship-home/friendship-home.component';
import { ViewRequestsComponent } from './friends/requests/view-requests/view-requests.component';
import { ViewFriendsComponent } from './friends/requests/view-friends/view-friends.component';
import { FriendshipModule } from './friends/friendship.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ErrorDialogComponent,
    HomeComponent,
    AboutComponent,
    GateComponent,
    ProfileEditorComponent
    //SendRequestsComponent,
    //FriendshipHomeComponent,
    //ViewRequestsComponent,
    //ViewFriendsComponent
  ],
  imports: [
    /* Angular */
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgForOf,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    CommonModule,
    FriendshipModule,

    /* Material UI */
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    FormsModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('bearerToken');
        }
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    DatePipe,
    EventFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
