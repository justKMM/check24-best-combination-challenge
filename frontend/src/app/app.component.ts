import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavTab {
  label: string;
  path: string;
  icon: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  tabs: NavTab[] = [
    {label: 'Home', path: 'home', icon: 'home'},
    {label: 'Dashboard', path: 'dashboard', icon: 'dashboard'},
    {label: 'About', path: 'about', icon: 'face'}
  ];

  activeLink: string = this.tabs[0].path;

  constructor(private router: Router) {}

  onTabChange(path: string) {
    this.router.navigate([path]);
    this.activeLink = path;
  }

  onManageAccount() {
    console.log('Manage account'); // Temporary placeholder
  }

  onLogOut() {
    console.log('Logged out'); // Temporary placeholder
  }
}
