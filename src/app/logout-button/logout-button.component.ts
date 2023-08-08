import { Component } from '@angular/core'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css'],
})
export class LogoutButtonComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService
      .logout()
      .then(() => {
        window.location.href = '/login'
      })
      .catch((error) => {
        console.error('Logout error:', error)
      })
  }
}
