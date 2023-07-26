import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // To manage the user's authentication state throughout the application.
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  // To keep track of the current user's data, and it emits updates whenever the user logs in or out.
  public user$: Observable<User | null> = this.userSubject.asObservable();
  // To keep tracl if the user is currently logged in or not. 
  public isLoggedIn$: Observable<boolean> = this.user$.pipe(
    map((user: User | null) => !!user) // Map user to boolean (true if user is not null, false if user is null)
  );

  constructor(private auth: AngularFireAuth, private router: Router, private snackBar: MatSnackBar) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        const userObj: User = {
          uid: user.uid,
          email: user.email || null,
        };
        this.userSubject.next(userObj);
      } else {
        this.userSubject.next(null);
      }
    });

    // Check local storage for login status on app initialization (page refresh)
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.auth.authState.pipe(take(1)).subscribe(() => {
        this.router.navigate(['home']);
      });
    }
  }

  public get user(): User | null {
    return this.userSubject.value;
  }

  public async login(email: string, password: string): Promise<void> {
    try {
      await this.auth.signInWithEmailAndPassword(email, password);
      this.handleLoginSuccess();
    } catch (error) {
      this.handleLoginError(error);
    }
  }

  private handleLoginSuccess(): void {
    localStorage.setItem('isLoggedIn', 'true');
    // Trigger the authState to update the userSubject immediately
    this.auth.authState.pipe(take(1)).subscribe(() => {
      this.router.navigate(['home']);
    });
  }

  private handleLoginError(error: any): void {
    console.warn('Login error:', error);
    this.snackBar.open(
      'Invalid email or password. Please check your admin credentials and try again.',
      'Close',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
      }
    );
  }

  public async logout(): Promise<void> {
    try {
      await this.auth.signOut();
      this.handleLogoutSuccess();
    } catch (error) {
      this.handleLogoutError(error);
    }
  }

  private handleLogoutSuccess(): void {
    //Redirect to login screen after successful logout
    this.router.navigate(['/admin-login']);
    localStorage.removeItem('isLoggedIn');
  }
  
  private handleLogoutError(error : any): void {
    console.error('Logout error:', error);
    this.snackBar.open(
      'An error occurred while logging out. Please try again.',
      'Close',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
      }
    );
  }
}
