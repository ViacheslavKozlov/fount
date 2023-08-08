import { Component } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = ''
  password: string = ''

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async login() {
    try {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      this.router.navigate(['/'])
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }
}
