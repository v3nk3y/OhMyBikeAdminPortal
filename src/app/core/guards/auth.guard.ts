import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { inject } from '@angular/core';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn$.pipe(
    take(1), // Take only the first emitted value, then automatically unsubscribe
    map((isLoggedIn) => {   
      if (isLoggedIn) {
        return true;
      } else {
        router.navigate(['/admin-login']);
        return false;
      }
    })
  );
}