import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NoteService } from '../note.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent implements OnInit {
  noteForm: FormGroup
  userId: string | null = null

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private authService: AuthService,
  ) {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    })

    this.authService.getUserId().subscribe((userId) => {
      this.userId = userId
    })
  }

  ngOnInit() {}

  onSubmit() {
    if (this.noteForm.valid && this.userId) {
      const title = this.noteForm.get('title')!.value
      const content = this.noteForm.get('content')!.value

      this.noteService
        .createNote({
          title,
          content,
          userId: this.userId,
        })
        .then(() => this.noteForm.reset())
        .catch((error) => {
          console.error('Create note error:', error)
        })
    }
  }
}
