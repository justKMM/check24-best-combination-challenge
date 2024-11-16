import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface NavTab {
  label: string;
  path: string;
  icon: string,
}

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.scss'
})
export class TopNavBarComponent {
  @Input() currentPath: string = 'home';
  tabs: NavTab[] = [
    {label: 'Home', path: 'home', icon: 'home'},
    {label: 'Dashboard', path: 'dashboard', icon: 'dashboard'},
    {label: 'About', path: 'about', icon: 'face'}
  ];

  activeLink: string = this.tabs[0].path;

  constructor(private router: Router) {
    this.router.navigate(['home']);
  }

  onTabChange(path: string) {
    this.router.navigate([path]);
    this.activeLink = path;
  }

  onManageAccount() {
    console.log('Manage account'); // Temporary placeholder
  }

  onLogOut() {
    this.router.navigate(['login']);
  }
}
