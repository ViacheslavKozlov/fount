import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { RouterModule, Routes } from '@angular/router' // Import RouterModule and Routes
import { environment } from '../environments/environment'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { CreateNoteComponent } from './create-note/create-note.component'
import { NotesListComponent } from './notes-list/notes-list.component'
import { AuthService } from './auth.service' // Import AuthService

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-note', component: CreateNoteComponent }, // Add the route for creating a note
  { path: 'notes', component: NotesListComponent }, // Add the route for the Notes List component
  { path: '', component: HomeComponent }, // Empty path for the home page
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateNoteComponent,
    NotesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes), // Configure the routes here
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
