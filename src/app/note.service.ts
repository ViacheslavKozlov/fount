import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Note } from './note.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly notesPath = 'notes'

  constructor(private firestore: AngularFirestore) {}

  createNote(note: { title: string; content: string; userId: string }) {
    return this.firestore.collection('notes').add(note)
  }

  getUserNotes(userId: string): Observable<Note[]> {
    return this.firestore
      .collection<Note>(this.notesPath, (ref) =>
        ref.where('userId', '==', userId),
      )
      .valueChanges()
  }
}
