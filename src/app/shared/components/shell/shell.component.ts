import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostBinding } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  isDarkMode = false;
  @HostBinding('class') get themeMode() { return this.isDarkMode ? 'theme-dark' : 'theme-light'; }

  // To check if the device is a handset (mobile device) or not using - BreakpointObserver 
  // This will emit true if the device matches the 'Handset' breakpoint, otherwise false
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches), // Map the breakpoint state to a boolean value (true or false)
      shareReplay() // Share the result with multiple subscribers to prevent reevaluation of the breakpoint
    );

  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService) {}

  logout(): void {
    // To logout the user
    this.authService.logout();
  }

  // Toggle Dark mode theme
  toggleTheme() : void{
    this.isDarkMode = !this.isDarkMode;
  }
}
