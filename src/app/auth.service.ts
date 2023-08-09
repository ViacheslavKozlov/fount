import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.setPersistence('session')
  }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  getUserId(): Observable<string | null> {
    return this.afAuth.authState.pipe(map((user) => (user ? user.uid : null)))
  }

  logout() {
    return this.afAuth.signOut()
  }
}
