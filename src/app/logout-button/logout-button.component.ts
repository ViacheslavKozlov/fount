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
        // Redirect to the login page after logout
        window.location.href = '/login'
      })
      .catch((error) => {
        console.error('Logout error:', error)
      })
  }
}
