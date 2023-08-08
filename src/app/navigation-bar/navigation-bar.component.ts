import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  isAuthenticated = false
  isLoginPage = false

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getUserId().subscribe((userId) => {
      this.isAuthenticated = !!userId
    })

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login'
      }
    })
  }

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
