import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router' // Import Router and NavigationEnd

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoginPage = false

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login' // Check if the current route is the login page
      }
    })
  }
}
