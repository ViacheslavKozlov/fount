import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  getUserId(): Observable<string> {
    return this.afAuth.authState.pipe(map((user) => (user ? user.uid : '')))
  }

  // You can add more authentication-related methods here
}
