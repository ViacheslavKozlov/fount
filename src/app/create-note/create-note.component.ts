import { Component } from '@angular/core'
import { NoteService } from '../note.service'
import { Note } from '../note.model'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent {
  note: Note = {
    title: '',
    content: '',
    userId: '',
  }

  constructor(
    private noteService: NoteService,
    private authService: AuthService,
  ) {}

  onSubmit() {
    this.authService.getUserId().subscribe((userId) => {
      if (userId) {
        this.note.userId = userId
        this.noteService
          .create(this.note)
          .then(() => {
            console.log('Note created successfully!')
            this.note.title = ''
            this.note.content = ''
          })
          .catch((error) => {
            console.error('Error creating note:', error)
          })
      }
    })
  }
}
