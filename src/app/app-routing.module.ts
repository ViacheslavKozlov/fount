import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { CreateNoteComponent } from './create-note/create-note.component'
import { NotesListComponent } from './notes-list/notes-list.component'
import { AuthGuard } from './auth.guard'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'create-note',
    component: CreateNoteComponent,
    canActivate: [AuthGuard],
  },
  { path: 'notes', component: NotesListComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
