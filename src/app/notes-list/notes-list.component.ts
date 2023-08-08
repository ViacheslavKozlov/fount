import { Component, OnInit } from '@angular/core'
import { NoteService } from '../note.service'
import { Note } from '../note.model'
import { AuthService } from '../auth.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent implements OnInit {
  notes$!: Observable<Note[]>

  constructor(
    private noteService: NoteService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.fetchUserNotes()
  }

  fetchUserNotes() {
    this.authService.getUserId().subscribe((userId) => {
      if (userId) {
        this.notes$ = this.noteService.getUserNotes(userId)
      }
    })
  }
}
