import { Component } from '@angular/core'
import { NoteService } from '../note.service'
import { Note } from '../note.model'
import { AuthService } from '../auth.service' // Import AuthService

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent {
  note: Note = {
    title: '',
    content: '',
    userId: '', // Initialize with empty string
  }

  constructor(
    private noteService: NoteService,
    private authService: AuthService,
  ) {}

  onSubmit() {
    // Get the user's ID from AuthService
    this.authService.getUserId().subscribe((userId) => {
      if (userId) {
        this.note.userId = userId // Assign userId to the note
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
